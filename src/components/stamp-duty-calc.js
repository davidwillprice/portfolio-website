import React, { Component } from "react"
/* eslint-disable */ import * as stampDutyCSS from "../styles/component/stamp-duty-calc.scss" /* eslint-enable */

class StampDutyCalc extends Component {
  render() {
    var standBuyer = [0, 0.02, 0.05, 0.05, 0.1, 0.12]
    var firstBuyer = [0, 0, 0, 0.05, 0.1, 0.12]
    var secBuyer = [0.03, 0.05, 0.08, 0.08, 0.13, 0.15]
    var taxBand = [0, 125000, 250000, 300000, 925000, 1500000, Infinity]
    var taxSum
    var error

    function firstTimeBuyer() {
      //First time buyer is clicked - If ticking, untick second property box - Run calc either way
      if (document.getElementById("firstTime").checked === true) {
        document.getElementById("secondProp").checked = false
      }
      calcInit()
    }
    function secondPropBuyer() {
      //Second Property is clicked - If ticking, untick first property box - Run calc either way
      if (document.getElementById("secondProp").checked === true) {
        document.getElementById("firstTime").checked = false
      }
      calcInit()
    }

    function calcInit() {
      //Check buyer type
      let buyerType = getBuyerType()
      //Get house cost
      let housePrice = document.getElementById("costofhouse").value
      //Check if cost is valid
      let costvalidity = checkCostValidity(housePrice)
      //Code paths based on if the house price input is valid
      if (costvalidity) {
        validCost(buyerType, housePrice)
      } else {
        invalidCost(buyerType, housePrice)
      }
    }

    function getBuyerType() {
      //Calculate button is clicked. Run calcutions depending on buyer type
      if (document.getElementById("firstTime").checked === true) {
        return firstBuyer
      } else if (document.getElementById("secondProp").checked === true) {
        return secBuyer
      } else {
        return standBuyer
      }
    }

    function checkCostValidity(housePrice) {
      if (housePrice > 0) {
        //console.log('House price is a number over zero and valid')
        return true
      } else {
        //console.log('House price is not a number over zero and invalid')
        return false
      }
    }

    function validCost(buyerType, housePrice) {
      stampCalc(buyerType, housePrice)
      if (error === undefined) {
        //If it's the first calc, show the calc table
        error = false
        toggleUICalcTable()
      } else if (error === true) {
        //If the last house price was an error, show the calc table and hide the error message
        error = false
        toggleUIError()
        toggleUICalcTable()
      }
    }

    function invalidCost() {
      //Was the previous anything but false?
      if (error === undefined) {
        //If it's the first calc, show the error message
        error = true
        toggleUIError()
      } else if (error === false) {
        //If the last house price was valid, hide the calc table and show the error message
        error = true
        toggleUIError()
        toggleUICalcTable()
      }
    }

    function toggleUIError() {
      //Show/hide an error message
      document
        .getElementById("stamp__error-message-con")
        .classList.toggle("hide")
    }
    function toggleUICalcTable() {
      //Show/hide the stamp duty caluations
      document.querySelector(".stamp__results-con").classList.toggle("hide")
    }

    function stampCalc(buyerType, housePrice) {
      var totalTax = 0
      //Loop through the buyerType taxband values
      for (var i = 0; i < buyerType.length; i++) {
        document.getElementById("stamp__row" + i).classList.remove("hide")
        var upBand = taxBand[i + 1]
        var loBand = taxBand[i]
        //Calculating Taxable sum
        if (housePrice - loBand <= 0) {
          // If the price of the house is less or equal to the lower tax band then no tax is applied and the row is removed from the UI
          taxSum = 0
          document.getElementById("stamp__row" + i).classList.add("hide")
        } else if (
          housePrice - loBand > 0 &&
          housePrice - loBand < upBand - loBand
        ) {
          //If the price of the house is more than lower tax band and the difference is smaller than the difference between the upper band and the lower band, the taxable sum is the house price minus the lower tax band
          taxSum = +(housePrice - loBand)
        } else {
          //Otherwise, the taxable sum is the upper band minus the lower band
          taxSum = upBand - loBand
        }
        //Add band's tax to total tax
        totalTax += buyerType[i] * taxSum
        //Populating row data
        document.getElementById("stamp__b" + (i + 2)).textContent =
          buyerType[i] * 100 + "%"
        document.getElementById("stamp__c" + (i + 2)).textContent = formatMoney(
          taxSum
        )
        document.getElementById("stamp__d" + (i + 2)).textContent = formatMoney(
          buyerType[i] * taxSum
        )
      }
      //Populate total tax and effective rate
      document.getElementById("stDutyTax").textContent = formatMoney(totalTax)
      document.getElementById("effectRate").textContent =
        +parseFloat(((totalTax / housePrice) * 100).toFixed(2)) + "%"
    }

    function formatMoney(n) {
      //Add two decimal places if the number isn't round and add commas to split up money
      if (n % 1 === 0) {
        return "£" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      } else {
        return "£" + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
      }
    }

    return (
      <div class="stamp__con">
        <div class="stamp__bg">
          <div>
            <h2 class="stamp__header">
              {" "}
              What Stamp Duty Tax will I have to&nbsp;pay?
            </h2>
            <div class="stamp__calc-con">
              <div class="stamp__house-price-con">
                <div class="stamp__house-price">
                  <div class="stamp__currency">£</div>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    defaultValue="200000"
                    name="costofhouse"
                    class="stamp__house-price-input"
                    id="costofhouse"
                    placeholder="Cost of house"
                    onChange={calcInit}
                  />
                </div>
                <div
                  class="stamp__error-message-con hide"
                  id="stamp__error-message-con"
                >
                  <div class="stamp__error-message" id="error-message">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z" />
                    </svg>
                    <p>Please enter a number above&nbsp;0</p>
                  </div>
                </div>
              </div>
              <button class="stamp__calc-button" onClick={calcInit}>
                Calculate
              </button>
            </div>
            <div class="stamp__buyer-type-con">
              <div class="stamp__buyer-type">
                <div>
                  <input
                    id="firstTime"
                    class="stamp__buyer-type-input"
                    type="checkbox"
                    onClick={firstTimeBuyer}
                  />
                  <span class="stamp__checkmark"></span>
                </div>
                Are you a first time buyer?
              </div>
              <div class="stamp__buyer-type">
                <div>
                  <input
                    id="secondProp"
                    class="stamp__buyer-type-input"
                    type="checkbox"
                    onClick={secondPropBuyer}
                  />
                  <span class="stamp__checkmark"></span>
                </div>
                <div>Is this a second property?</div>
              </div>
            </div>
            <div class="stamp__results-con hide">
              <h3>Results</h3>
              <div class="stamp__results-main">
                <div class="stamp__final-figure">
                  Stamp duty to pay <br />
                  <span id="stDutyTax"></span>
                </div>
                <div class="stamp__final-figure">
                  {" "}
                  Effective rate
                  <br />
                  <span id="effectRate"></span>
                </div>
              </div>
              <table class="stamp__results-table">
                <tbody>
                  <tr>
                    <th class="stamp__col0">Tax band</th>
                    <th class="stamp__col1">%</th>
                    <th class="stamp__col2">Taxable sum</th>
                    <th class="stamp__col3">Tax</th>
                  </tr>
                  <tr id="stamp__row0">
                    <td class="stamp__col0">
                      <span class="stamp__tax-band-long">£0 – £125,000</span>
                      <span class="stamp__tax-band-short">£0 – £125k</span>
                    </td>
                    <td class="stamp__col1">
                      <span id="stamp__b2"></span>
                    </td>
                    <td class="stamp__col2">
                      <span id="stamp__c2"></span>
                    </td>
                    <td class="stamp__col3">
                      <span id="stamp__d2"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row1">
                    <td class="stamp__col0">
                      <span class="stamp__tax-band-long">
                        £125,000 – £250,000
                      </span>
                      <span class="stamp__tax-band-short">£125k – £250k</span>
                    </td>
                    <td class="stamp__col1">
                      <span id="stamp__b3"></span>
                    </td>
                    <td class="stamp__col2">
                      <span id="stamp__c3"></span>
                    </td>
                    <td class="stamp__col3">
                      <span id="stamp__d3"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row2">
                    <td class="stamp__col0">
                      <span class="stamp__tax-band-long">
                        £250,000 – £300,000
                      </span>
                      <span class="stamp__tax-band-short">£250k – £300k</span>
                    </td>
                    <td class="stamp__col1">
                      <span id="stamp__b4"></span>
                    </td>
                    <td class="stamp__col2">
                      <span id="stamp__c4"></span>
                    </td>
                    <td class="stamp__col3">
                      <span id="stamp__d4"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row3">
                    <td class="stamp__col0">
                      <span class="stamp__tax-band-long">
                        £300,000 – £925,000
                      </span>
                      <span class="stamp__tax-band-short">£300k – £925k</span>
                    </td>
                    <td class="stamp__col1">
                      <span id="stamp__b5"></span>
                    </td>
                    <td class="stamp__col2">
                      <span id="stamp__c5"></span>
                    </td>
                    <td class="stamp__col3">
                      <span id="stamp__d5"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row4">
                    <td class="stamp__col0">
                      <span class="stamp__tax-band-long">
                        £925,000 – £1,500,000
                      </span>
                      <span class="stamp__tax-band-short">£925k – £1.5m</span>
                    </td>
                    <td class="stamp__col1">
                      <span id="stamp__b6"></span>
                    </td>
                    <td class="stamp__col2">
                      <span id="stamp__c6"></span>
                    </td>
                    <td class="stamp__col3">
                      <span id="stamp__d6"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row5">
                    <td class="stamp__col0">
                      <span class="stamp__tax-band-long">£1,500,000+</span>
                      <span class="stamp__tax-band-short">£1.5m+</span>
                    </td>
                    <td class="stamp__col1">
                      <span id="stamp__b7"></span>
                    </td>
                    <td class="stamp__col2">
                      <span id="stamp__c7"></span>
                    </td>
                    <td class="stamp__col3">
                      <span id="stamp__d7"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="stamp__disclaimer">Correct as of Nov 2018</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StampDutyCalc
