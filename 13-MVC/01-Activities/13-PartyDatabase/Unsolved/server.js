//* Console log all the party names.
//* Console log all the client names.
//* Console log all the parties that have a party-type of grown-up.
//* Console log all the clients and their parties.

var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectPartyName("party_name", "parties");
orm.selectClientName("client_name", "clients");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectPartyType("parties", "party_type", "grown-up");

// Find the buyer with the most pets.
//sELECT parties.party_name, parties.party_type, parties.party_cost, clients.client_name from parties inner JOIN clients ON clients.id = parties.client_id;
orm.findClientsParties(["client_name", "party_name"], "clients", "parties", "id", "client_id");