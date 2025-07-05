import React from 'react';
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing-page/home/Hero";

describe("Hero Component", () => { 
    test("renders hero img ", () => { 
        render(<Hero/>);
        const heroImg = screen.getByAltText("Hero Image");
        expect(heroImg).toBeInTheDocument();
        expect(heroImg).toHaveAtttribute("src", "media/images/homeHero.png")
     })
 })