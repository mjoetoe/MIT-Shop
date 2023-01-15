import React from "react";
import ArticlesList from "./ArticlesList";
import Header from './Header';
import Footer from './Footer';
import './styles.scss'

function ShopApp() {
    return (
        <>
            <div class="o-container">
                <main>
                    <Header />
                    <ArticlesList />
                    <Footer />
                </main>
            </div>
        </>
    );
}

export default ShopApp;