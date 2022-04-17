import React, { ChangeEvent, useEffect, useState } from "react"
import {
  hide,
  con,
  bg,
  header,
  col0,
  col1,
  col2,
  col3,
  disclaimer,
  checkmark,
  finalFigure,
  resultsMain,
  housePriceInput,
  housePrice,
  resultsTable,
  calcCon,
  resultsCon,
  taxBandLong,
  taxBandShort,
  buyerTypeInput,
  buyerType,
  buyerTypeCon,
  calcButton,
  errorMessage,
  currency,
  housePriceCon,
} from "../styles/component/stamp-duty-calc.module.scss"

interface BuyerType {
  firstTime: boolean
  secondProp: boolean
}

export default function StampDutyCalc() {
  const startingHouseCost = 200000

  //States
  const [startCalc, setStartCalc] = useState(false)
  const [buyerTypeObj, setBuyerType] = useState({
    firstTime: false,
    secondProp: false,
  })
  const [houseCost, setHouseCost] = useState(startingHouseCost)
  const [error, setError] = useState(false)

  //Tax Band Data
  var standBuyer = [0, 0.02, 0.05, 0.05, 0.1, 0.12]
  var firstBuyer = [0, 0, 0, 0.05, 0.1, 0.12]
  var secBuyer = [0.03, 0.05, 0.08, 0.08, 0.13, 0.15]
  var taxBand = [0, 125000, 250000, 300000, 925000, 1500000, Infinity]
  var taxSum

  useEffect(() => {
    //Get house cost
    let housePrice = +houseCost!
    //Check if cost is a valid number
    let costvalidity = housePrice > 0
    //Set error depending on whether the house price is valid
    if (!costvalidity) {
      setError(true)
    } else {
      setError(false)
    }
    //If the calculator has been asked to calculate and there is no error, start calculations
    if (startCalc && !error) {
      let buyerType = getBuyerType()
      stampCalc(buyerType, housePrice)
    }
  })

  function getBuyerType() {
    //Get buyer type data depending on option selections
    if (buyerTypeObj.firstTime === true) {
      return firstBuyer
    } else if (buyerTypeObj.secondProp === true) {
      return secBuyer
    } else {
      return standBuyer
    }
  }

  function stampCalc(buyerType: number[], housePrice: number) {
    var totalTax = 0
    //Loop through the buyerType taxband values
    for (var i = 0; i < buyerType.length; i++) {
      document.getElementById("stamp__row" + i)?.classList.remove("hide")
      var upBand = taxBand[i + 1]
      var loBand = taxBand[i]
      //Calculating Taxable sum
      if (housePrice - loBand <= 0) {
        // If the price of the house is less or equal to the lower tax band then no tax is applied and the row is removed from the UI
        taxSum = 0
        document.getElementById("stamp__row" + i)?.classList.add("hide")
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
      document.getElementById("stamp__b" + (i + 2))!.textContent =
        buyerType[i] * 100 + "%"
      document.getElementById("stamp__c" + (i + 2))!.textContent = formatMoney(
        taxSum
      )
      document.getElementById("stamp__d" + (i + 2))!.textContent = formatMoney(
        buyerType[i] * taxSum
      )
    }
    //Populate total tax and effective rate
    document.getElementById("stDutyTax")!.textContent = formatMoney(totalTax)
    document.getElementById("effectRate")!.textContent =
      +parseFloat(((totalTax / housePrice) * 100).toFixed(2)) + "%"
  }

  function formatMoney(n: number) {
    //Add two decimal places if the number isn't round and add commas to split up money
    if (n % 1 === 0) {
      return "£" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } else {
      return "£" + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
    }
  }

  function changeFirstTimeHandler() {
    setStartCalc(true)
    let newBuyerType: BuyerType
    if (buyerTypeObj.firstTime === false) {
      newBuyerType = { firstTime: true, secondProp: false }
    } else {
      newBuyerType = { firstTime: false, secondProp: false }
    }
    setBuyerType(newBuyerType)
  }
  function changeSecondPropHandler() {
    setStartCalc(true)
    let newBuyerType: BuyerType
    if (buyerTypeObj.secondProp === false) {
      newBuyerType = { firstTime: false, secondProp: true }
    } else {
      newBuyerType = { firstTime: false, secondProp: false }
    }
    setBuyerType(newBuyerType)
  }
  function calcStartHandler() {
    setStartCalc(true)
  }
  function calcHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement
    setHouseCost(+target.value)
  }

  return (
    <div className={con}>
      <div className={bg}>
        <div>
          <h2 className={header}>
            {" "}
            What Stamp Duty Tax will I have to&nbsp;pay?
          </h2>
          <div className={calcCon}>
            <div className={housePriceCon}>
              <div className={housePrice}>
                <div className={currency}>£</div>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  defaultValue={startingHouseCost}
                  name="costofhouse"
                  className={housePriceInput}
                  id="costofhouse"
                  placeholder="Cost of house"
                  onChange={calcHandler}
                />
              </div>
              {error ? (
                <div id="stamp__error-message-con">
                  <div className={errorMessage} id="error-message">
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
              ) : (
                ""
              )}
            </div>
            {!startCalc ? (
              <button className={calcButton} onClick={calcStartHandler}>
                Calculate
              </button>
            ) : (
              ""
            )}
          </div>
          <div className={buyerTypeCon}>
            <div className={buyerType}>
              <div>
                <input
                  id="firstTime"
                  className={buyerTypeInput}
                  type="checkbox"
                  onChange={changeFirstTimeHandler}
                  checked={buyerTypeObj.firstTime}
                />
                <span className={checkmark}></span>
              </div>
              Are you a first time buyer?
            </div>
            <div className={buyerType}>
              <div>
                <input
                  id="secondProp"
                  className={buyerTypeInput}
                  type="checkbox"
                  onChange={changeSecondPropHandler}
                  checked={buyerTypeObj.secondProp}
                />
                <span className={checkmark}></span>
              </div>
              <div>Is this a second property?</div>
            </div>
          </div>
          {startCalc && !error ? (
            <div className={resultsCon}>
              <h3>Results</h3>
              <div className={resultsMain}>
                <div className={finalFigure}>
                  Stamp duty to pay <br />
                  <span id="stDutyTax"></span>
                </div>
                <div className={finalFigure}>
                  {" "}
                  Effective rate
                  <br />
                  <span id="effectRate"></span>
                </div>
              </div>
              <table className={resultsTable}>
                <tbody>
                  <tr>
                    <th className={col0}>Tax band</th>
                    <th className={col1}>%</th>
                    <th className={col2}>Taxable sum</th>
                    <th className={col3}>Tax</th>
                  </tr>
                  <tr id="stamp__row0">
                    <td className={col0}>
                      <span className={taxBandLong}>£0 – £125,000</span>
                      <span className={taxBandShort}>£0 – £125k</span>
                    </td>
                    <td className={col1}>
                      <span id="stamp__b2"></span>
                    </td>
                    <td className={col2}>
                      <span id="stamp__c2"></span>
                    </td>
                    <td className={col3}>
                      <span id="stamp__d2"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row1">
                    <td className={col0}>
                      <span className={taxBandLong}>£125,000 – £250,000</span>
                      <span className={taxBandShort}>£125k – £250k</span>
                    </td>
                    <td className={col1}>
                      <span id="stamp__b3"></span>
                    </td>
                    <td className={col2}>
                      <span id="stamp__c3"></span>
                    </td>
                    <td className={col3}>
                      <span id="stamp__d3"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row2">
                    <td className={col0}>
                      <span className={taxBandLong}>£250,000 – £300,000</span>
                      <span className={taxBandShort}>£250k – £300k</span>
                    </td>
                    <td className={col1}>
                      <span id="stamp__b4"></span>
                    </td>
                    <td className={col2}>
                      <span id="stamp__c4"></span>
                    </td>
                    <td className={col3}>
                      <span id="stamp__d4"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row3">
                    <td className={col0}>
                      <span className={taxBandLong}>£300,000 – £925,000</span>
                      <span className={taxBandShort}>£300k – £925k</span>
                    </td>
                    <td className={col1}>
                      <span id="stamp__b5"></span>
                    </td>
                    <td className={col2}>
                      <span id="stamp__c5"></span>
                    </td>
                    <td className={col3}>
                      <span id="stamp__d5"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row4">
                    <td className={col0}>
                      <span className={taxBandLong}>£925,000 – £1,500,000</span>
                      <span className={taxBandShort}>£925k – £1.5m</span>
                    </td>
                    <td className={col1}>
                      <span id="stamp__b6"></span>
                    </td>
                    <td className={col2}>
                      <span id="stamp__c6"></span>
                    </td>
                    <td className={col3}>
                      <span id="stamp__d6"></span>
                    </td>
                  </tr>
                  <tr id="stamp__row5">
                    <td className={col0}>
                      <span className={taxBandLong}>£1,500,000+</span>
                      <span className={taxBandShort}>£1.5m+</span>
                    </td>
                    <td className={col1}>
                      <span id="stamp__b7"></span>
                    </td>
                    <td className={col2}>
                      <span id="stamp__c7"></span>
                    </td>
                    <td className={col3}>
                      <span id="stamp__d7"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={disclaimer}>Correct as of Nov 2018</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}
