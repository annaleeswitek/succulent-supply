import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

/**
 * INITIAL STATE
 */
const products = {}

/**
 * ACTION CREATORS
 */


const getAllProducts = products => ({type: GET_ALL_PRODUCTS, products})
