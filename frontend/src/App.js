import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Header from "./components/site/Header";
import Ticker from "./components/site/Ticker";
import Hero from "./components/site/Hero";
import NewsFeed from "./components/site/NewsFeed";
import CitySpotlight from "./components/site/CitySpotlight";
import RemoteWorkTips from "./components/site/RemoteWorkTips";
import Subscribe from "./components/site/Subscribe";
import Footer from "./components/site/Footer";

const Home = () => {
    return (
        <div
            data-testid="home-page"
            className="paper-grain min-h-screen bg-paper text-ink"
        >
            <Header />
            <Ticker />
            <main data-testid="main-content">
                <Hero />
                <NewsFeed />
                <CitySpotlight />
                <RemoteWorkTips />
                <Subscribe />
            </main>
            <Footer />
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#1C1B1A",
                        color: "#F4F3EF",
                        border: "1px solid #1C1B1A",
                        borderRadius: 0,
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                    },
                }}
            />
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
