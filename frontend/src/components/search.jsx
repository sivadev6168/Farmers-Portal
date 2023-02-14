import React, { useState, useCallback } from "react"
// import _ from "lodash"
import SelectSearch from "react-select-search"
import "../components/css/search.css";

const colourOptions = [
  { label: "Blue", name: "blue" },
  { label: "Red", name: "red" },
  { label: "Green", name: "green" }
]

let controller = new AbortController()
let signal = controller.signal

export const Search = ({ ...props }) => {
  const [selected, setSelected] = useState(null)

  const onChange = value => setSelected(value)

//   const debouncedQueryOptions = _.debounce(query => {
//     return new Promise((resolve, reject) => {
//       fetch(
//         `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
//         { signal }
//       )
//         .then(response => response.json())
//         .then(({ drinks }) => {
//           resolve(
//             drinks.map(({ idDrink, strDrink }) => ({
//               value: idDrink,
//               name: strDrink
//             }))
//           )
//         })
//         .catch(reject)
//     })
//   }, 180)

  return (
    <SelectSearch
      // closeOnSelect={false}
      // printOptions="always"
      options={colourOptions}
    //   getOptions={query => debouncedQueryOptions(query)}
      search
      placeholder="Drink"
      onChange={onChange}
      {...props}
    />
  )
}
