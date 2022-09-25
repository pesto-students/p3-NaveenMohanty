--Create Cities Table
CREATE TABLE Cities(
  city_id INT,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(20) NOT NULL,
  PRIMARY KEY(city_id)
);
--Insert Into cities table
INSERT INTO Cities VALUES(1,'Mumbai','Maharastra');
INSERT INTO Cities VALUES(2,'Pune','Maharastra');
INSERT INTO Cities VALUES(3,'Kolkata','WB');
INSERT INTO Cities VALUES(4,'Agra','UP');
--Create WareHouses Table
CREATE TABLE WareHouses(
  w_id INT,
  w_name VARCHAR(20) NOT NULL,
  city_id INT,
  addr VARCHAR(20),
  extra_cont JSON,
  PRIMARY KEY(w_id),
  FOREIGN KEY(city_id) REFERENCES Cities(city_id) ON DELETE SET NULL
);
--Insert Into WareHouses table
INSERT INTO WareHouses VALUES(1,'Ram Mart',1,'123, Navi','{"size":"1700 Sq.Ft."}');
INSERT INTO WareHouses VALUES(2,'Laxman Mart',2,'65, Maha','{size:"2000 Sq.Ft."}');
INSERT INTO WareHouses VALUES(3,'Shyam Mart',2,'33, Colony','{size:"2500 Sq.Ft."}');
INSERT INTO WareHouses VALUES(4,'Sudhar Mart',2,'69, Pablo','{size:"2500 Sq.Ft."}');
--Create Stores Table
CREATE TABLE Stores(
  s_id INT,
  s_name VARCHAR(20) NOT NULL,
  city_id INT,
  w_id INT,
  PRIMARY KEY(s_id),
  FOREIGN KEY(city_id) REFERENCES Cities(city_id) ON DELETE SET NULL,
  FOREIGN KEY(w_id) REFERENCES WareHouses(w_id) ON DELETE CASCADE
);
--Insert Into Stores table
INSERT INTO Stores VALUES(1,'Coma Store',2,3);
INSERT INTO Stores VALUES(2,'Galaxy Store',1,1);
INSERT INTO Stores VALUES(3,'Maha Store',2,3);
INSERT INTO Stores VALUES(4,'Lowkey Store',3,4);
--Create Customers Table
CREATE TABLE Customers(
  c_id INT,
  c_name VARCHAR(20) NOT NULL,
  city_id INT,
  addr VARCHAR(20),
  sex VARCHAR(1),
  PRIMARY KEY(c_id),
  FOREIGN KEY(city_id) REFERENCES Cities(city_id) ON DELETE SET NULL
);
--Insert Into Customers table
INSERT INTO Customers VALUES(1,'Naveen',4,'23, Haranagar','M');
INSERT INTO Customers VALUES(2,'Jateen',2,'56, Harapur','M');
INSERT INTO Customers VALUES(3,'Urmila',2,'36, Hudanagar','F');
INSERT INTO Customers VALUES(4,'Mr.Patil',1,'33, BMC','M');
--Create Items Table
CREATE TABLE Items(
  i_id INT,
  description VARCHAR(50) NOT NULL,
  weight DECIMAL(5,2),
  cost DECIMAL(15,2) NOT NULL,
  PRIMARY KEY(i_id)
);
--Insert Into Items table
INSERT INTO Items VALUES(1,'Face Wash',0.20,199.99);
INSERT INTO Items VALUES(2,'Flour',5,300);
INSERT INTO Items VALUES(3,'Soup',0.06,59.10);
INSERT INTO Items VALUES(4,'Mobile',0.20,999);
INSERT INTO Items VALUES(5,'Mouse',0.20,100);
--Create Orders Table
CREATE TABLE Orders(
  o_id INT,
  i_id INT NOT NULL,
  order_date Date,
  quantity INT,
  c_id INT,
  PRIMARY KEY(o_id),
  FOREIGN KEY(c_id) REFERENCES Customers(c_id) ON DELETE CASCADE,
  FOREIGN KEY(i_id) REFERENCES Items(i_id) ON DELETE CASCADE
);
--Insert Into Orders table
INSERT INTO Orders VALUES(1,1,'2022-08-25',2,4);
INSERT INTO Orders VALUES(2,4,'2022-09-22',4,1);
INSERT INTO Orders VALUES(3,3,'2022-01-23',4,4);
INSERT INTO Orders VALUES(4,2,'2022-03-11',2,4);
INSERT INTO Orders VALUES(5,5,'2022-04-12',1,3);
INSERT INTO Orders VALUES(6,5,'2022-05-13',1,2);