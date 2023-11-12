import React, { useEffect, useState } from "react";
import { FaEuroSign } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import CountryFlag from "react-country-flag";

function TaxCalculator() {
  const [financialYear, setFinancialYear] = useState("FY 2022-23");
  const [country, setCountry] = useState("Australia");
  const [purchasePrice, setpPurchasePrice] = useState();
  const [salePrice, setpSalePrice] = useState();
  const [expenses, setpExpenses] = useState();
  const [annualIncome, setAnnualIncome] = useState("$0 - $18,200");
  const [investmentType, setInvestmentType] = useState("Long Term");
  const [taxRate, setTaxRate] = useState("0%");
  const [capitalGain, setCapitalGain] = useState(0);
  const [discountLongTerm, setDiscountLongTerm] = useState(0);
  const [netGain, setNetGain] = useState(0);
  const [taxPay, setTaxPay] = useState(0);
  const [hidden, setHidden] = useState("");
  const [tick, setTick] = useState("Long Term");
  const [countryCode, setCountryCode] = useState("AU");

  const data = 0;

  const ratearray = [
    { limit: "$0 - $18,200", rate: "0%" },
    { limit: "$18,201 - $45,000", rate: "Nil + 19% of excess over $18,200" },
    {
      limit: "$45,001 - $120,000",
      rate: "$45,092 + 32.5% of excess over $45,00",
    },
    {
      limit: "$120,001 - $180,000",
      rate: "$29,467 + 37% of excess over $120,000",
    },
    { limit: "$180,001 +", rate: "$51,667 + 32.5% of excess over $180,000" },
  ];

  const flagarray = [
    { limit: "Australia", rate: "AU" },
    { limit: "United State", rate: "US" },
    { limit: "India", rate: "IN" },
    { limit: "Germany", rate: "DE" },
    { limit: "Europe", rate: "FR" },
  ];

  const calculatedata = async () => {
    setCapitalGain(salePrice - purchasePrice - expenses);

    if (investmentType === "Short Term") {
      setDiscountLongTerm(0);
      setNetGain(capitalGain);
      setHidden("hidden");
    } else if (investmentType === "Long Term") {
      setHidden("");
      setDiscountLongTerm(Math.max(0, 0.5 * capitalGain));
      setNetGain(capitalGain - discountLongTerm);
    }

    if (netGain >= 0) {
      if (annualIncome === "$0 - $18,200") {
        setTaxPay(0);
      } else if (annualIncome === "$18,201 - $45,000") {
        setTaxPay(Math.max(0, 0.19 * netGain));
      } else if (annualIncome === "$45,001 - $120,000") {
        setTaxPay(Math.max(0, 0.325 * netGain));
      } else if (annualIncome === "$120,001 - $180,000") {
        setTaxPay(Math.max(0, 0.37 * netGain));
      } else {
        setTaxPay(Math.max(0, 0.45 * netGain));
      }
    }
  };

  useEffect(() => {
    console.log("Called");
    console.log(investmentType, "investmentType");
    console.log(annualIncome, "annualIncome");
    console.log(purchasePrice, "purchasePrice");
    calculatedata();
  }, [
    investmentType,
    annualIncome,
    purchasePrice,
    salePrice,
    expenses,
    capitalGain,
    discountLongTerm,
    netGain,
    taxPay,
  ]);

  return (
    <div className="w-[60%]  lg:w-[70%] md:w-full sm:w-screen md:m-0 sm:m-0 sm:p-8 md:p-[4rem] h-cover bg-white p-[4rem] pl-[8rem] pr-[8rem] lg:p-[4rem] ml-[4rem] mr-[4rem] mt-[1rem] rounded-2xl mb-[1rem]">
      <div>
        <h1 className="text-3xl font-black flex justify-center pb-[2rem] sm:text-center">
          Free Crypto Tax Calculator - {country}{" "}
        </h1>
        <form action="">
          <div className="flex justify-between  gap-5">
            <div className="w-1/2 flex sm:flex-col justify-between ">
              <label
                htmlFor="financialYear"
                className="text-sm  flex items-center"
              >
                Financial Year
              </label>
              <select
                id="financialYear"
                name="financialYear"
                value={financialYear}
                onChange={(e) => setFinancialYear(e.target.value)}
                className="w-[72%] sm:w-full text-black bg-[#EFF2F5]  rounded-lg text-md px-5 py-2.5 inline-flex items-center justify-between border-none font-black
                "
              >
                <option value="FY 2022-23">FY 2022-23</option>
                <option value="FY 2021-22">FY 2021-22</option>
                <option value="FY 2020-21">FY 2020-21</option>
                <option value="FY 2019-20">FY 2019-20</option>
              </select>
            </div>

            <div className="w-1/2 flex sm:flex-col justify-between">
              <label htmlFor="country" className="text-sm flex items-center ">
                Country
              </label>
              <div className="relative w-[77%]">
                <select
                  id="country"
                  name="country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value)
                    setCountryCode(
                      flagarray.find((obj) => obj.limit === e.target.value).rate)
                  }}
                  className="w-full sm:w-full text-black bg-[#EFF2F5] justify-between  font-black rounded-lg text-md px-5 py-2.5  inline-flex items-center border-none pl-[3rem]"
                >
                  <option value="Australia">Australia</option>
                  <option value="United State">United State</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="Europe">Europe</option>
                </select>
                <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <CountryFlag className="text-xl" countryCode={countryCode} svg />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[2px] border border-[#C9CFDD] shadow-md m-auto mt-8"></div>

          <div>
            <div class="grid gap-6 mb-6 grid-cols-2 sm:grid-cols-1 pt-8">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-xs font-medium text-black "
                >
                  Enter purchase price of Crypto
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="first_name"
                    class="bg-[#EFF2F5]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-6 p-2.5 border-none "
                    value={purchasePrice}
                    onChange={(e) => {
                      setpPurchasePrice(e.target.value);
                    }}
                    required
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <span class="text-gray-500">$</span>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-xs font-medium text-black"
                >
                  Enter sale price of Crypto
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="last_name"
                    class="bg-[#EFF2F5] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-6 border-none"
                    value={salePrice}
                    onChange={(e) => {
                      setpSalePrice(e.target.value);
                    }}
                    required
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <span class="text-gray-500">$</span>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-xs font-medium text-black"
                >
                  Enter your Expenses
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    class="bg-[#EFF2F5]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-6 border-none"
                    value={expenses}
                    onChange={(e) => {
                      setpExpenses(e.target.value);
                    }}
                    required
                  />
                  <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <span class="text-gray-500">$</span>
                  </div>
                </div>
              </div>
              <div className="">
                <label className="block mb-2 text-xs font-medium text-black ">
                  Investment Term:
                </label>
                <div className="flex items-center justify-between">
                  <div
                    className={`w-[47%] border-2 pl-4 py-3 rounded-lg flex flex-wrap item-center justify-between ${
                      tick === "Short Term"
                        ? "text-blue-900 bg-blue-100 border-blue-500"
                        : ""
                    }`}
                  >
                    <label htmlFor="shortTerm" className="mr-2  shortTerm">
                      Short Term
                    </label>
                    <input
                      type="radio"
                      id="shortTerm"
                      name="investmentTerm"
                      value="Short Term"
                      checked={investmentType === "Short Term"}
                      onChange={(e) => {
                        setInvestmentType(e.target.value);
                        setTick("Short Term");
                      }}
                      className="mr-4 hidden"
                    />
                    <BiCheck
                      className={`m-auto text-2xl ${
                        tick === "Short Term" ? "text-blue-900" : "hidden"
                      }`}
                    />
                  </div>

                  <div
                    className={`w-[47%] border-2 pl-4 py-3 rounded-lg flex flex-wrap item-center justify-between ${
                      tick === "Long Term"
                        ? "text-blue-900 bg-blue-100 border-blue-500"
                        : ""
                    }`}
                  >
                    <label htmlFor="longTerm" className="mr-2 longTerm">
                      Long Term
                    </label>
                    <input
                      type="radio"
                      id="longTerm"
                      name="investmentTerm"
                      value="Long Term"
                      checked={investmentType === "Long Term"}
                      onChange={(e) => {
                        setInvestmentType(e.target.value);
                        setTick("Long Term");
                      }}
                      className="mr-4 hidden"
                    />
                    <BiCheck
                      className={`m-auto text-2xl ${
                        tick === "Long Term" ? "text-blue-800" : "hidden"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <label
                  htmlFor="annualIncome"
                  className="block mb-2 text-xs font-medium text-black"
                >
                  Select Your Annual Income
                </label>
                <select
                  id="annualIncome"
                  name="annualIncome"
                  value={annualIncome}
                  onChange={(e) => {
                    setAnnualIncome(e.target.value);
                    setTaxRate(
                      ratearray.find((obj) => obj.limit === e.target.value).rate
                    );
                  }}
                  className=" p-2 border border-gray-300 rounded-md bg-[#EFF2F5] border-none"
                >
                  <option value="$0 - $18,200">$0 - $18,200</option>
                  <option value="$18,201 - $45,000">$18,201 - $45,000</option>
                  <option value="$45,001 - $120,000">$45,001 - $120,000</option>
                  <option value="$120,001 - $180,000">
                    $120,001 - $180,000
                  </option>
                  <option value="$180,001 +">$180,001 +</option>
                </select>
              </div>

              <div className=" flex flex-col justify-center item-center p-1 pt-5">
                <div className="text-xs">Tax Rate</div>
                <div className="text-xs">{taxRate}</div>
              </div>

              <div className={`${hidden}`}>
                <label
                  for="first_name"
                  class="block mb-2 text-xs font-medium text-black "
                >
                  Capital gains amount
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-[#EFF2F5]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-none "
                  value={`$ ${capitalGain}`}
                  disabled
                />
              </div>

              <div className={`${hidden}`}>
                <label
                  for="first_name"
                  class="block mb-2 text-xs font-medium text-black "
                >
                  Discount for long term gains
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-[#EFF2F5]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-none "
                  value={`$ ${discountLongTerm}`}
                  onChange={(e) => {
                    setDiscountLongTerm(e.target.value);
                  }}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="flex gap-8 pt-8">
            <div className="w-[48%] bg-[#EBF9F4] rounded-lg p-5 flex flex-col items-center">
              <p className="text-sm font-normal">
                Net Capital gains tax amount
              </p>
              <div className="text-xl font-bold text-[#0FBA83] flex items-center">
                ${netGain}
              </div>
            </div>

            <div className="w-[48%] bg-[#EBF2FF] rounded lg p-5 flex flex-col items-center">
              <p className="text-sm font-normal">The tax you need to pay*</p>
              <div className="text-xl font-bold text-[#0141CF] flex items-center">
                ${taxPay}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaxCalculator;
