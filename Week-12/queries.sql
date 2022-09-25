--Find the item that has minimum weight.
SELECT i_id,description, MAX(weight)
FROM Items;

--Find the different warehouses in “Pune”.
SELECT *
FROM WareHouses
WHERE city_id = (
  SELECT city_id
  FROM Cities
  WHERE city = 'Pune'
);

--Find the details of items ordered by a customer “Mr. Patil”.
  SELECT description
  FROM Items
  WHERE i_id IN(
    SELECT i_id
    FROM Orders
    WHERE c_id = (
      SELECT c_id
      FROM Customers
      WHERE c_name = 'Mr.Patil'
      LIMIT 1)
  );

--Find a Warehouse which has maximum stores.
SELECT w_id,w_name
FROM WareHouses
WHERE w_id = (
  SELECT w_id
  FROM Stores
  GROUP BY w_id
  ORDER BY COUNT(w_id) DESC
  LIMIT 1
);

--Find an item which is ordered for a minimum number of times.
SELECT i_id,description
FROM Items
WHERE i_id = (
  SELECT i_id
  FROM Orders
  GROUP BY i_id
  ORDER BY COUNT(i_id) DESC
  LIMIT 1
);

--Find the detailed orders given by each customer.
SELECT Customers.c_id,Customers.c_name,Orders.o_id,Orders.quantity,Items.i_id,Items.description
FROM Customers
JOIN Orders
JOIN Items
ON Customers.c_id = Orders.c_id AND Orders.i_id = Items.i_id;




 