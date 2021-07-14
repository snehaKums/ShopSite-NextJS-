import React from 'react';
import styles from './searchFilter.module.css'

export default function SearchAndFilter({value,search,filter}){
    return(
        <div className={styles.searchWrapper}>
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className={styles.search}
                            placeholder="Search for Products..."
                            value={value}
                            onChange={search}
                        />
                    <div className={styles.select}>
                        <select
                            onChange={filter}
                            className={styles.search}
                            aria-label="Filter Products By Category"
                        >
                            <option value="All">All Category</option>
                            <option value="men's clothing">Men's clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                            <option value="women's clothing">Women's clothing</option>
                        </select>
                        <span className={styles.focus}></span>
                    </div>
                </div>
    )
}