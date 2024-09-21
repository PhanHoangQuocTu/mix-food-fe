import React from 'react';

const menuCategories = [
  {
    name: 'Appetizers',
    dishes: [
      { name: 'Spring Rolls', price: '$6.99' },
      { name: 'Tom Yum Soup', price: '$7.99' },
      { name: 'Satay Skewers', price: '$8.99' },
    ],
  },
  {
    name: 'Main Courses',
    dishes: [
      { name: 'Pad Thai', price: '$14.99' },
      { name: 'Green Curry', price: '$15.99' },
      { name: 'Basil Fried Rice', price: '$13.99' },
    ],
  },
  {
    name: 'Desserts',
    dishes: [
      { name: 'Mango Sticky Rice', price: '$7.99' },
      { name: 'Coconut Ice Cream', price: '$5.99' },
      { name: 'Thai Tea Crème Brûlée', price: '$6.99' },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="bg-primary-400 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">Our Menu</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {menuCategories.map((category, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">{category.name}</h3>
              <ul>
                {category.dishes.map((dish, dishIndex) => (
                  <li key={dishIndex} className="mb-2 flex justify-between">
                    <span>{dish.name}</span>
                    <span className="font-semibold">{dish.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
