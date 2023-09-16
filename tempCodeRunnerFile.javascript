function compareAndCombineStrings(str1, str2) {
  // Compare the strings
  if (str1 < str2) {
    return str1 + str2;
  } else {
    return str2 + str1;
  }
}
console.log(compareAndCombineStrings("650584ebdc99109d9a3bee7e", "65058588dc99109d9a3bee80"));
