import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState } from "react";
import { TextField, FormControl, Button, Box } from "@mui/material";
import axios from "axios";

function DataInput({ label, field, setField }) {
  return (
    <TextField
      style={{
        margin: "1rem 0 1rem 0",
      }}
      label={label}
      type="number"
      variant="outlined"
      onChange={(e) => setField(e.target.value)}
      value={field}
    />
  );
}

export default function Home() {
  const [quick_asset_turnover_rate, setQuick_asset_turnover_rate] =
    useState("");
  const [inventory_turnover_rate_times, setInventory_turnover_rate_times] =
    useState("");
  const [operating_expense_rate, setOperating_expense_rate] = useState("");
  const [cash_turnover_rate, setCash_turnover_rate] = useState("");
  const [total_asset_growth_rate, setTotal_asset_growth_rate] = useState("");
  const [current_asset_turnover_rate, setCurrent_asset_turnover_rate] =
    useState("");
  const [
    research_and_development_expense_rate,
    setResearch_and_development_expense_rate,
  ] = useState("");
  const [fixed_assets_turnover_frequency, setFixed_assets_turnover_frequency] =
    useState("");
  const [inventory_current_liability, setInventory_current_liability] =
    useState("");
  const [
    long_term_liability_to_current_assets,
    setLong_term_liability_to_current_assets,
  ] = useState("");
  const [cash_current_liability, setCash_current_liability] = useState("");
  const [total_assets_to_gnp_price, setTotal_assets_to_gnp_price] =
    useState("");
  const [allocation_rate_per_person, setAllocation_rate_per_person] =
    useState("");
  const [accounts_receivable_turnover, setAccounts_receivable_turnover] =
    useState("");
  const [average_collection_days, setAverage_collection_days] = useState("");
  const [quick_ratio, setQuick_ratio] = useState("");
  const [quick_assets_current_liability, setQuick_assets_current_liability] =
    useState("");
  const [total_debt_total_net_worth, setTotal_debt_total_net_worth] =
    useState("");
  const [revenue_per_person, setRevenue_per_person] = useState("");
  const [net_value_growth_rate, setNet_value_growth_rate] = useState("");
  const [
    interest_bearing_debt_interest_rate,
    setInterest_bearing_debt_interest_rate,
  ] = useState("");
  const [fixed_assets_to_assets, setFixed_assets_to_assets] = useState("");
  const [revenue_per_share_yuan, setRevenue_per_share_yuan] = useState("");
  const [current_ratio, setCurrent_ratio] = useState("");
  const [current_assets_total_assets, setCurrent_assets_total_assets] =
    useState("");

  const handleSubmit = (event) => {
    const data_to_be_sent = {
      quick_asset_turnover_rate: quick_asset_turnover_rate,
      inventory_turnover_rate_times: inventory_turnover_rate_times,
      operating_expense_rate: operating_expense_rate,
      cash_turnover_rate: cash_turnover_rate,
      total_asset_growth_rate: total_asset_growth_rate,
      current_asset_turnover_rate: current_asset_turnover_rate,
      research_and_development_expense_rate:
        research_and_development_expense_rate,
      fixed_assets_turnover_frequency: fixed_assets_turnover_frequency,
      inventory_current_liability: inventory_current_liability,
      long_term_liability_to_current_assets:
        long_term_liability_to_current_assets,
      cash_current_liability: cash_current_liability,
      total_assets_to_gnp_price: total_assets_to_gnp_price,
      allocation_rate_per_person: allocation_rate_per_person,
      accounts_receivable_turnover: accounts_receivable_turnover,
      average_collection_days: average_collection_days,
      quick_ratio: quick_ratio,
      quick_assets_current_liability: quick_assets_current_liability,
      total_debt_total_net_worth: total_debt_total_net_worth,
      revenue_per_person: revenue_per_person,
      net_value_growth_rate: net_value_growth_rate,
      interest_bearing_debt_interest_rate: interest_bearing_debt_interest_rate,
      fixed_assets_to_assets: fixed_assets_to_assets,
      "revenue_per_share_yuan_¥": revenue_per_share_yuan,
      current_ratio: current_ratio,
      current_assets_total_assets: current_assets_total_assets,
    };

    console.log("Data", data_to_be_sent);

    const API_ENDPOINT = "https://riderb3858.pythonanywhere.com/machine";

    axios
      .get(API_ENDPOINT, { data_to_be_sent })
      .then((response) => {
        print("got something", response);
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Group 2's Bankruptcy's Calculator" />
        <FormControl style={{ width: "90rem" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 3fr)",
              columnGap: 3,
              rowGap: 1,
              mb: "2rem",
            }}
          >
            <DataInput
              label={"Quick Asset Turnover Rate"}
              field={quick_asset_turnover_rate}
              setField={setQuick_asset_turnover_rate}
            />
            <DataInput
              label={"Inventory Turnover Rate (times)"}
              field={inventory_turnover_rate_times}
              setField={setInventory_turnover_rate_times}
            />
            <DataInput
              label={"Operating Expense Rate"}
              field={operating_expense_rate}
              setField={setOperating_expense_rate}
            />
            <DataInput
              label={"Cash Turnover Rate"}
              field={cash_turnover_rate}
              setField={setCash_turnover_rate}
            />
            <DataInput
              label={"Total Asset Growth Rate"}
              field={total_asset_growth_rate}
              setField={setTotal_asset_growth_rate}
            />
            <DataInput
              label={"Current Asset Turnover Rate"}
              field={current_asset_turnover_rate}
              setField={setCurrent_asset_turnover_rate}
            />
            <DataInput
              label={"Research and development expense rate"}
              field={research_and_development_expense_rate}
              setField={setResearch_and_development_expense_rate}
            />
            <DataInput
              label={"Fixed Assets Turnover Frequency"}
              field={fixed_assets_turnover_frequency}
              setField={setFixed_assets_turnover_frequency}
            />
            <DataInput
              label={"Inventory/Current Liability"}
              field={inventory_current_liability}
              setField={setInventory_current_liability}
            />
            <DataInput
              label={"Long-term Liability to Current Assets"}
              field={long_term_liability_to_current_assets}
              setField={setLong_term_liability_to_current_assets}
            />
            <DataInput
              label={"Cash/Current Liability"}
              field={cash_current_liability}
              setField={setCash_current_liability}
            />
            <DataInput
              label={"Total assets to GNP price"}
              field={total_assets_to_gnp_price}
              setField={setTotal_assets_to_gnp_price}
            />
            <DataInput
              label={"Allocation rate per person"}
              field={allocation_rate_per_person}
              setField={setAllocation_rate_per_person}
            />
            <DataInput
              label={"Accounts Receivable Turnover"}
              field={accounts_receivable_turnover}
              setField={setAccounts_receivable_turnover}
            />
            <DataInput
              label={"Average Collection Days"}
              field={average_collection_days}
              setField={setAverage_collection_days}
            />
            <DataInput
              label={"Quick Ratio"}
              field={quick_ratio}
              setField={setQuick_ratio}
            />
            <DataInput
              label={"Quick Assets/Current Liability"}
              field={quick_assets_current_liability}
              setField={setQuick_assets_current_liability}
            />
            <DataInput
              label={"Total debt/Total net worth"}
              field={total_debt_total_net_worth}
              setField={setTotal_debt_total_net_worth}
            />
            <DataInput
              label={"Revenue per person"}
              field={revenue_per_person}
              setField={setRevenue_per_person}
            />
            <DataInput
              label={"Net Value Growth Rate"}
              field={net_value_growth_rate}
              setField={setNet_value_growth_rate}
            />
            <DataInput
              label={"Interest-bearing debt interest rate"}
              field={interest_bearing_debt_interest_rate}
              setField={setInterest_bearing_debt_interest_rate}
            />
            <DataInput
              label={"Fixed Assets to Assets"}
              field={fixed_assets_to_assets}
              setField={setFixed_assets_to_assets}
            />
            <DataInput
              label={"Revenue Per Share (Yuan ¥)"}
              field={revenue_per_share_yuan}
              setField={setRevenue_per_share_yuan}
            />
            <DataInput
              label={"Current Ratio"}
              field={current_ratio}
              setField={setCurrent_ratio}
            />
            <DataInput
              label={"Current Assets/Total Assets"}
              field={current_assets_total_assets}
              setField={setCurrent_assets_total_assets}
            />
          </Box>

          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
      </main>

      <Footer />
    </div>
  );
}
