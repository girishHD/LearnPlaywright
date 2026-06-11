// The Pyramid of Doom / Callback Hell
// Real-world e2e scenario: Booking a flight
// Each step depends on the previous step completing

function step01_launchBrowser(callback) {
    setTimeout(function () {
        console.log("Step 1: Chrome browser launched");
        callback();
    }, 500);
}
function step02_maximizeWindow(callback) {
    setTimeout(function () {
        console.log("Step 2: Window maximized");
        callback();
    }, 300);
}
function step03_navigateToUrl(callback) {
    setTimeout(function () {
        console.log("Step 3: Navigated to flight booking site");
        callback();
    }, 700);
}
function step04_waitForHomePage(callback) {
    setTimeout(function () {
        console.log("Step 4: Home page fully loaded");
        callback();
    }, 600);
}
function step05_acceptCookies(callback) {
    setTimeout(function () {
        console.log("Step 5: Cookies accepted");
        callback();
    }, 400);
}
function step06_clickFlightTab(callback) {
    setTimeout(function () {
        console.log("Step 6: Flight tab selected");
        callback();
    }, 300);
}
function step07_selectTripType(callback) {
    setTimeout(function () {
        console.log("Step 7: Round trip selected");
        callback();
    }, 200);
}
function step08_enterFromCity(callback) {
    setTimeout(function () {
        console.log("Step 8: Departure city entered");
        callback();
    }, 500);
}
function step09_enterToCity(callback) {
    setTimeout(function () {
        console.log("Step 9: Destination city entered");
        callback();
    }, 500);
}
function step10_selectDepartDate(callback) {
    setTimeout(function () {
        console.log("Step 10: Departure date selected");
        callback();
    }, 600);
}
function step11_selectReturnDate(callback) {
    setTimeout(function () {
        console.log("Step 11: Return date selected");
        callback();
    }, 600);
}
function step12_selectPassengers(callback) {
    setTimeout(function () {
        console.log("Step 12: 2 passengers selected");
        callback();
    }, 400);
}
function step13_selectCabinClass(callback) {
    setTimeout(function () {
        console.log("Step 13: Economy class selected");
        callback();
    }, 300);
}
function step14_clickSearchFlights(callback) {
    setTimeout(function () {
        console.log("Step 14: Search flights clicked");
        callback();
    }, 500);
}
function step15_waitForSearchResults(callback) {
    setTimeout(function () {
        console.log("Step 15: Search results displayed");
        callback();
    }, 1000);
}
function step16_selectFlight(callback) {
    setTimeout(function () {
        console.log("Step 16: Flight selected");
        callback();
    }, 400);
}
function step17_enterPassengerDetails(callback) {
    setTimeout(function () {
        console.log("Step 17: Passenger details entered");
        callback();
    }, 700);
}
function step18_selectSeats(callback) {
    setTimeout(function () {
        console.log("Step 18: Seats selected");
        callback();
    }, 500);
}
function step19_addBaggage(callback) {
    setTimeout(function () {
        console.log("Step 19: Baggage added");
        callback();
    }, 400);
}
function step20_proceedToPayment(callback) {
    setTimeout(function () {
        console.log("Step 20: Payment page loaded");
        callback();
    }, 600);
}

// This is the PYRAMID OF DOOM / CALLBACK HELL
// 20 callbacks nested inside each other — 20 levels deep!
console.log("Starting flight booking e2e test...\n");

step01_launchBrowser(function () {
    step02_maximizeWindow(function () {
        step03_navigateToUrl(function () {
            step04_waitForHomePage(function () {
                step05_acceptCookies(function () {
                    step06_clickFlightTab(function () {
                        step07_selectTripType(function () {
                            step08_enterFromCity(function () {
                                step09_enterToCity(function () {
                                    step10_selectDepartDate(function () {
                                        step11_selectReturnDate(function () {
                                            step12_selectPassengers(function () {
                                                step13_selectCabinClass(function () {
                                                    step14_clickSearchFlights(function () {
                                                        step15_waitForSearchResults(function () {
                                                            step16_selectFlight(function () {
                                                                step17_enterPassengerDetails(function () {
                                                                    step18_selectSeats(function () {
                                                                        step19_addBaggage(function () {
                                                                            step20_proceedToPayment(function () {
                                                                                console.log("\nAll 20 steps completed! Test passed.");
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
