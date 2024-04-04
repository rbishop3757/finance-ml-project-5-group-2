import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";

export default function Home() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");

  const handleSubmit = (event) => {
    console.log("got here");
    console.log(event);
    console.log("field1", field1);
    console.log("field2", field2);
    console.log("field3", field3);
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to FINA4390 Group 2 Project 5!" />
        <FormControl style={{ width: "20rem" }}>
          <TextField
            style={{
              margin: "1rem 0 1rem 0",
            }}
            label="Field 1"
            variant="outlined"
            onChange={(e) => setField1(e.target.value)}
            value={field1}
          />
          <TextField
            style={{
              margin: "1rem 0 1rem 0",
            }}
            label="Field 2"
            variant="outlined"
            onChange={(e) => setField2(e.target.value)}
            value={field2}
          />
          <TextField
            style={{
              margin: "1rem 0 1rem 0",
            }}
            label="Field 3"
            variant="outlined"
            onChange={(e) => setField3(e.target.value)}
            value={field3}
          />
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
