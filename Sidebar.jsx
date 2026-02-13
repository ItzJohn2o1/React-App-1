import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems = ["Albert Eggstein", "Attila the Hen", "Dixie Chick", "Gregory Peck", "Mary Poppins"] }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  
  // TODO: 2 Using a state hook, maintaining the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  
  let [filter, setFilter] = useState("")
  
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  // TODO: 3 Add a new menu item to the correct variable associated with this class.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {  // Only add if not empty
      setMenuItems([newMenuItem, ...menuItems])  // Add new item to the beginning
      setNewMenuItem("")  // Clear the input field
      console.log("Added menu item: " + newMenuItem)
    }
  }, [newMenuItem, menuItems])
  
  // TODO: 4  Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
  const filteredItems = menuItems.filter(item => 
    item.toLowerCase().includes(filter.toLowerCase())
  )
  
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />

      <button
        onClick={() => {
          // This calls the addMenuItem function
          addMenuItem()
        }}
      >
        Add Item
      </button>
      <br />

      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

      {/* Render inside the outer div an unordered list of the menu items */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
