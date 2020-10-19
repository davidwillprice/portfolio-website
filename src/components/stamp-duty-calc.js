import React, { Component } from 'react';
import stampDutyCSS from '../styles/component/stamp-duty-calc.css';

class StampDutyCalc extends Component {
    render() {
        var standBuyer = [0, 0.02, 0.05, 0.05, 0.10, 0.12];
        var firstBuyer = [0, 0, 0, 0.05, 0.10, 0.12];
        var secBuyer = [0.03, 0.05, 0.08, 0.08, 0.13, 0.15];
        var taxBand = [0, 125000, 250000, 300000, 925000, 1500000, Infinity];
        var taxSum;
        var error;

        function firstTimeBuyer() {
            //First time buyer is clicked - If ticking, untick second property box - Run calc either way
            if (document.getElementById("firstTime").checked == true) {
                document.getElementById("secondProp").checked = false;
            }
            calcInit();
        }
        function secondPropBuyer() {
            //Second Property is clicked - If ticking, untick first property box - Run calc either way 
            if (document.getElementById("secondProp").checked == true) {
                document.getElementById("firstTime").checked = false;
            }
            calcInit();
        }

        function calcInit() {
            //Check buyer type
            let buyerType = getBuyerType();
            //Get house cost
            let housePrice = document.getElementById('costofhouse').value;
            //Check if cost is valid 
            let costvalidity = checkCostValidity(housePrice);
            //Code paths based on if the house price input is valid
            if (costvalidity) {
                validCost(buyerType, housePrice);
            } else {
                invalidCost(buyerType, housePrice);
            }
        }

        function getBuyerType() {
            //Calculate button is clicked. Run calcutions depending on buyer type
            if (document.getElementById("firstTime").checked == true) {
                return firstBuyer;
            } else if (document.getElementById("secondProp").checked == true) {
                return secBuyer;
            } else {
                return standBuyer;
            }
        }

        function checkCostValidity(housePrice) {
            if (housePrice > 0) {
                //console.log('House price is a number over zero and valid')
                return true;
            } else {
                //console.log('House price is not a number over zero and invalid')
                return false;
            }
        }

        function validCost(buyerType, housePrice) {
            stampCalc(buyerType, housePrice);
            if (error === undefined) {
                //If it's the first calc, show the calc table
                error = false;
                toggleUICalcTable();
            } else if (error == true) {
                //If the last house price was an error, show the calc table and hide the error message
                error = false;
                toggleUIError();
                toggleUICalcTable();
            }
        }

        function invalidCost() {
            //Was the previous anything but false?
            if (error === undefined) {
                //If it's the first calc, show the error message
                error = true;
                toggleUIError();
            } else if (error == false) {
                //If the last house price was valid, hide the calc table and show the error message
                error = true;
                toggleUIError();
                toggleUICalcTable();
            }
        }

        function toggleUIError() {
            //Show/hide an error message
            document.getElementById('error-message-con').classList.toggle('hide');
        }
        function toggleUICalcTable() {
            //Show/hide the stamp duty caluations
            document.querySelector('.stampDutyCalcuations').classList.toggle('hide');
        }

        function stampCalc(buyerType, housePrice) {
            var totalTax = 0;
            //Loop through the buyerType taxband values
            for (var i = 0; i < buyerType.length; i++) {
                document.getElementById('stamp-duty-row' + i).classList.remove('hide');
                var upBand = taxBand[i + 1];
                var loBand = taxBand[i];
                //Calculating Taxable sum
                if ((housePrice - loBand) <= 0) {
                    // If the price of the house is less or equal to the lower tax band then no tax is applied and the row is removed from the UI
                    taxSum = 0;
                    document.getElementById('stamp-duty-row' + i).classList.add('hide');
                } else if ((housePrice - loBand) > 0 && (housePrice - loBand) < (upBand - loBand)) {
                    //If the price of the house is more than lower tax band and the difference is smaller than the difference between the upper band and the lower band, the taxable sum is the house price minus the lower tax band
                    taxSum = + (housePrice - loBand);
                } else {
                    //Otherwise, the taxable sum is the upper band minus the lower band
                    taxSum = (upBand - loBand);
                }
                //Add band's tax to total tax
                totalTax += (buyerType[i] * taxSum);
                //Populating row data
                document.getElementById('stamp-b' + (i + 2)).textContent = (buyerType[i] * 100) + '%';
                document.getElementById('stamp-c' + (i + 2)).textContent = formatMoney(taxSum);
                document.getElementById('stamp-d' + (i + 2)).textContent = formatMoney(buyerType[i] * taxSum);
            }
            //Populate total tax and effective rate
            document.getElementById('stDutyTax').textContent = formatMoney(totalTax);
            document.getElementById('effectRate').textContent = +parseFloat((((totalTax / housePrice) * 100)).toFixed(2)) + '%';
        }

        function formatMoney(n) {
            //Add two decimal places if the number isn't round and add commas to split up money
            if (n % 1 === 0) {
                return '£' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return '£' + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            }
        };

        return <div class="stamp_container">
            <div class="stamp_background">
                <div>
                    <h2> What Stamp Duty Tax will I have to&nbsp;pay?</h2>
                    <div class="stamp_cost_table">
                        <div class="input-container">
                            <div class="cost-container">
                                <div class="pound_box border-box">£</div>
                                <input type="text" inputMode="numeric" pattern="[0-9]*" defaultValue="200000" name="costofhouse" id="costofhouse" placeholder="Cost of house" onChange={calcInit} />
                            </div>
                            <div class="error-message-con hide" id="error-message-con">
                                <div class="error-message" id="error-message">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z" /></svg>
                                    <p>Please enter a number above&nbsp;0</p>
                                </div>
                            </div>
                        </div>
                        <button id="calcstampduty" onClick={calcInit}>Calculate</button>
                    </div>

                    <table class="stamp_buyer_type">
                        <tbody>
                            <tr>
                                <td class="stamp_checkbox"><input id="firstTime" type="checkbox" onClick={firstTimeBuyer} /><span class="checkmark"></span></td>
                                <td><div>Are you a first time buyer?</div></td>
                            </tr>
                            <tr>
                                <td class="stamp_checkbox"><input id="secondProp" type="checkbox" onClick={secondPropBuyer} /><span class="checkmark"></span></td>
                                <td><div>Is this a second property?</div></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="stampDutyCalcuations hide">
                        <div class="stamp_results">
                            <h3 class="stamp_result_title">Results</h3>
                            <div class="stamp_main_results">
                                <div class="stamp_result_titles">Stamp duty to pay <br /><span id="stDutyTax"></span></div>
                                <div class="stamp_result_titles"> Effective rate<br /><span id="effectRate"></span></div>
                            </div>
                        </div>
                        <table class="stamp-duty-table">
                            <tbody>
                                <tr>
                                    <th class="col0">Tax band</th>
                                    <th class="col1">%</th>
                                    <th class="col2">Taxable sum</th>
                                    <th class="col3">Tax</th>
                                </tr>
                                <tr id="stamp-duty-row0">
                                    <td class="col0"><span class="hide_mobile">£0 – £125,000</span><span class="show_mobile">£0 – £125k</span></td>
                                    <td class="col1"><span id="stamp-b2"></span></td>
                                    <td class="col2"><span id="stamp-c2"></span></td>
                                    <td class="col3"><span id="stamp-d2"></span></td>
                                </tr>
                                <tr id="stamp-duty-row1">
                                    <td class="col0"><span class="hide_mobile">£125,000 – £250,000</span><span class="show_mobile">£125k – £250k</span></td>
                                    <td class="col1"><span id="stamp-b3"></span></td>
                                    <td class="col2"><span id="stamp-c3"></span></td>
                                    <td class="col3"><span id="stamp-d3"></span></td>
                                </tr>
                                <tr id="stamp-duty-row2">
                                    <td class="col0"><span class="hide_mobile">£250,000 – £300,000</span><span class="show_mobile">£250k – £300k</span></td>
                                    <td class="col1"><span id="stamp-b4"></span></td>
                                    <td class="col2"><span id="stamp-c4"></span></td>
                                    <td class="col3"><span id="stamp-d4"></span></td>
                                </tr>
                                <tr id="stamp-duty-row3">
                                    <td class="col0"><span class="hide_mobile">£300,000 – £925,000</span><span class="show_mobile">£300k – £925k</span></td>
                                    <td class="col1"><span id="stamp-b5"></span></td>
                                    <td class="col2"><span id="stamp-c5"></span></td>
                                    <td class="col3"><span id="stamp-d5"></span></td>
                                </tr>
                                <tr id="stamp-duty-row4">
                                    <td class="col0"><span class="hide_mobile">£925,000 – £1,500,000</span><span class="show_mobile">£925k – £1.5m</span></td>
                                    <td class="col1"><span id="stamp-b6"></span></td>
                                    <td class="col2"><span id="stamp-c6"></span></td>
                                    <td class="col3"><span id="stamp-d6"></span></td>
                                </tr>
                                <tr id="stamp-duty-row5">
                                    <td class="col0"><span class="hide_mobile">£1,500,000+</span><span class="show_mobile">£1.5m+</span></td>
                                    <td class="col1"><span id="stamp-b7"></span></td>
                                    <td class="col2"><span id="stamp-c7"></span></td>
                                    <td class="col3"><span id="stamp-d7"></span></td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="disclaimer">Correct as of Nov 2018</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default StampDutyCalc;