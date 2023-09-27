import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TopBar({menuId}) {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    // Fetch categories
    fetch(`https://qr.zoudne.com/api_menu_view/categories.php?id=${menuId}`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="topbar">
      <ul>
        {/* {categories.map((category) => (
          <li key={category.id}>
            <a href={`/menus/${category.id}`}>{category.name}</a>
          </li>
        ))} */}
        
      </ul>
    </div>
  );
}

export default TopBar;
