// Item names come from Kava's Instagram posts. Prices & descriptions are NOT public in the feed: fill in `price` / `desc`.
const i = (name, img) => ({ name, img, price: null, desc: '' })
export const menu = {
  'Breakfast & Bowls': [i('English Breakfast','english-breakfast'), i('Egg on Sourdough Toast','egg-toast'), i('Sourdough Creamy Mushroom Toast','mushroom-toast'), i('Green Smoothie Bowl','smoothie-bowl'), i('Yogurt Bowl with Fruits','yogurt-bowl'), i('Mango French Toast','french-toast')],
  'Pizza & Mains': [i('Puff Pastry Pizza','puff-pizza'), i('Chicken Pepperoni Pizza','pepperoni-pizza'), i('Egg Roast Pizza','egg-pizza'), i('Thai Red Chicken Curry','thai-curry'), i('Madras Grilled Chicken','madras-chicken'), i('Moroccan Grilled Paneer','paneer'), i('Haleem with Brioche Bread','haleem'), i('Quesadilla Chicken','quesadilla'), i('Grilled Chicken Pobalano Sauce','pobalano')],
  'Bites': [i('Nachos','nachos'), i('Peri Peri Paneer Popcorn','popcorn-paneer'), i('Crispy Corn','crispy-corn'), i('Pulled Chicken Tacos','tacos'), i('Pan Fried Chilli Fish','chilli-fish'), i('Coconut Toss Chicken','coconut-toss')],
  'Drinks & Sweets': [i('Latte','latte'), i('Blue Lemonade','lemonade'), i('Big Brownie Bite','brownie')]
}
