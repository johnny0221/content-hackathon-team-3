import q1Photo from "../assets/q1.png";
import q1Merchant from "../assets/q1_merchant.png";
import q2Photo from "../assets/q2.png";
import q2Merchant from "../assets/q2_merchant.png";
import q3Photo from "../assets/q3.png";
import q3Merchant from "../assets/q3_merchant.png";
import q4Photo from "../assets/q4.png";
import q4Merchant from "../assets/q4_merchant.png";
import q5Photo from "../assets/q5.png";
import q5Merchant from "../assets/q5_merchant.png";

const questionTypes = {
  "Single-SKU": "Single-SKU",
  "Partner merchant": "Partner merchant",
  "Sports Trivia": "Sports Trivia",
};

const categories = {
  Electronics: "Electronics",
  "Baby & Kids": "Baby & Kids",
  Beauty: "Beauty",
  Travel: "Travel",
  Home: "Home",
  Fashion: "Fashion",
};

export const questions = [
  {
    type: questionTypes["Single-SKU"],
    question_image: q1Photo,
    additionalInfo:
      "Jean Perry 1600TC Tencel Beaulieu Bedsheet Set I Fitted Sheet I Bedsheet Cover I Bedsheet Set",
    merchant_name: "Shopee Mall",
    merchant_logo: q1Merchant,
    question:
      "What is the price of this Jean Perry queen-size bedsheet set from Shopee Mall?",
    category: categories.Home,
    choices: [
      { content: "$134", answer: false },
      { content: "$139", answer: true },
      { content: "$144", answer: false },
    ],
    redirectLink:
      "https://www.shopback.sg/product/redirect/plink/shopeemall%3A18507261236?storeId=19354",
  },
  {
    type: questionTypes["Single-SKU"],
    question_image: q2Photo,
    additionalInfo: "Red Bull Racing 2022 Team Hoodie for Men - Size S",
    merchant_name: "Amazon SG",
    merchant_logo: q2Merchant,
    question:
      "What is the price of the Red Bull Racing 2022 Team Hoodie for Men - Size S from Amazon SG?",
    category: categories.Fashion,
    choices: [
      { content: "$185", answer: false },
      { content: "$155", answer: false },
      { content: "$225", answer: true },
    ],
    redirectLink:
      "https://www.shopback.sg/product/redirect/plink/amazon%3AB0B2SBMM4M?storeId=19307",
  },
  {
    type: questionTypes["Single-SKU"],
    question_image: q3Photo,
    additionalInfo: "iPhone 14 Pro Max 128G",
    merchant_name: "Lazada",
    merchant_logo: q3Merchant,
    question: "What is the price of the iPhone 14 Pro Max 128G from Lazada?",
    category: categories.Electronics,
    choices: [
      { content: "$1,460", answer: false },
      { content: "$1,649", answer: true },
      { content: "$1,789", answer: false },
    ],
    redirectLink:
      "https://www.shopback.sg/product/redirect/plink/lazmall%3A2462496589_SGAMZ?storeId=19352",
  },
  {
    type: questionTypes["Single-SKU"],
    question_image: q4Photo,
    additionalInfo: "Discover Seoul Pass - 24 hours",
    merchant_name: "Klook",
    merchant_logo: q4Merchant,
    question: "What is the price of this Seoul pass from Klook?",
    category: categories.Travel,
    choices: [
      { content: "$52.49", answer: true },
      { content: "$42.49", answer: false },
      { content: "$32.49", answer: false },
    ],
    redirectLink: "https://www.shopback.sg/redirect/alink/405489",
  },
  {
    type: questionTypes["Single-SKU"],
    question_image: q5Photo,
    additionalInfo: "Nintendo Switch Animal Crossing: New Horizon edition",
    merchant_name: "Amazon SG",
    merchant_logo: q5Merchant,
    question:
      "What is the price of the Nintendo Switch Animal Crossing: New Horizon edition from Amazon SG?",
    category: categories.Electronics,
    choices: [
      { content: "$369", answer: true },
      { content: "$259", answer: false },
      { content: "$429", answer: false },
    ],
    redirectLink:
      "https://www.shopback.sg/product/redirect/plink/amazon%3AB084DDDNRP?storeId=19307",
  },
];
