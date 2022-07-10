#!/usr/bin/env node
const readline = require("readline");
var height;
var inputUnit;
var outputUnit;
var convertFrom;
var convertTo;

main();
async function main() {
    height = await input("Please enter a height:\n> ");
    inputUnit = await input("Please enter a unit to convert from:\n1) cm\n2) m\n3) ft\n4) U.S. football fields (ff)\n> ");
    outputUnit = await input("Please enter a unit to convert to:\n1) cm\n2) m\n3) ft\n4) U.S. football fields (ff)\n> ");
    getUnits();
    conversion();
}

function input(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close();
            resolve(ans);
        })
    );
}

function getUnits() {
    switch (inputUnit) {
        case "1":
        case "cm":
            convertFrom = "cm";
            break;
        case "2":
        case "m":
            convertFrom = "m";
            break;
        case "3":
        case "ft":
            convertFrom = "ft";
            break;
        case "4":
        case "ff":
        case "football fields":
            convertFrom = "ff";
            break;
    }
    switch (outputUnit) {
        case "1":
        case "cm":
            convertTo = "cm";
            break;
        case "2":
        case "m":
            convertTo = "m";
            break;
        case "3":
        case "ft":
            convertTo = "ft";
            break;
        case "4":
        case "ff":
        case "football fields":
            convertTo = "football fields";
            break;
    }
}

async function conversion() {
    switch (convertFrom) {
        case "cm":
            convertCm();
            break;
        case "m":
            convertM();
            break;
        case "ft":
            convertFt();
            break;
        case "football fields":
            convertFf();
    }
    const redo = await input("Calculate another height? (y or 1 to go again)\n> ");
    if (redo === "y" || redo === "1") {
        main();
    }
}

function output(calculatedAmt) {
    console.log(height, convertFrom, "->", calculatedAmt, convertTo);
}

function convertCm() {
    switch (convertTo) {
        case "cm":
            output(height);
            break;
        case "m":
            output(height * 0.01);
            break;
        case "ft":
            output(height * 0.0328084);
            break;
        case "football fields":
            output(height * 0.00009113416);
    }
}

function convertM() {
    switch (convertTo) {
        case "cm":
            output(height * 100);
            break;
        case "m":
            output(height);
            break;
        case "ft":
            output(height * 3.28084);
            break;
        case "football fields":
            output(height * 0.009113416);
    }
}

function convertFt() {
    switch (convertTo) {
        case "cm":
            output(height * 30.48);
            break;
        case "m":
            output(height * 0.3048);
            break;
        case "ft":
            output(height);
            break;
        case "football fields":
            output(height * 0.002777775);
    }
}

function convertFf() {
    switch (convertTo) {
        case "cm":
            output(height * 10972.8);
            break;
        case "m":
            output(height * 109.728);
            break;
        case "ft":
            output(height * 360);
            break;
        case "football fields":
            output(height);
            break;
    }
}
