import React, { useState } from 'react'

const index = (pokemon, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1)
  const maxPages = Math.ceil(pokemon.length / itemsPerPage)

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return pokemon.slice(begin, end);
  }

  const next = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPages));
  }

  const prev = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  const jump = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPages));
  }

  return { next, prev, jump, currentData, currentPage, maxPages }
}

export default index