* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	**Sequelize is an example of ORM.

  	- Answer: What advantages does it offer?
	 ** Sequelize is easy to learn and has many different great features like synchronization, association, validation and many more

  	- Answer: How do I install it? How do I incorporate it into my app?
 ** When you are ready to use Sequelize just use npm to install the package in your dependencies. Sequelize sets up a connection between the REST API/ application and SQL database.

  	- Answer: What the heck is a Sequelize model? What role will it play?
	 ** Models are the essence of Sequelize. A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model. The model tells Sequelize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types). A model in Sequelize has a name. This name does not have to be the same name of the table it represents in the database. Usually, models have singular names (such as User) while tables have pluralized names (such as Users), although this is fully configurable. The Sequelize models are ES6 classes. You can very easily add custom instance or class level methods.

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		 ** tableName.findAll({
  			where: {
    		Independence Year: { $gt: new Date().getFullYear() - 50}
  			}
			});
			// SELECT * FROM table WHERE Independence Year >= 1970

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)
			** tableName.findAll({
  			offset: 2,
			limit: 2,
			order: [[sequelize.col('IndependenceYear'), 'DESC']
  			}
			});

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 

	const jane = await User.create({ country: "Jane", phoneCode: "Doe", capital: " ", independenceYear: " " });
	console.log("Jane's auto-generated ID:", jane.id);
  ```

  const jane = await User.create({ name: "Jane" });
	console.log(jane.name); // "Jane"
	jane.name = "Ada";
	// the name is still "Jane" in the database
	await jane.save();
	// Now the name was updated to "Ada" in the database!
