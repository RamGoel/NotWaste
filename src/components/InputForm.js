import React, { useState } from 'react'
import CustomButton from '../items/CustomButton'
import { Navigate } from 'react-router-dom'
import './dash.css'
import itemsArray from './data'

function InputForm() {
  const [nav, setNav] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])
  return (
    <div className="d-flex justify-content-center col-sm-11 col-lg-4 mx-auto align-items-center" style={{ height: '100vh' }}>
      <div className='my-auto container w-100-sm w-25-lg '>
        <div className='my-auto abcd' style={{
          overflowY: 'scroll',
          maxHeight: '90vh',
        }}>

          {
            itemsArray.map(itemObject => {
              return <div className='my-2'>
                <h6 style={{
                  borderBottom: '1px solid gray',
                  paddingBottom: '5px',
                  margin: '15px 0px'
                }}>{itemObject.category}</h6>
                <div className='d-flex align-items-center' style={{
                  flexWrap: 'wrap'
                }}>
                  {
                    itemObject.items.map(itemName => {
                      return <p onClick={() => {
                        if (selectedItems.includes(itemName)) {
                          alert("true")
                          var k = selectedItems.filter(s => s.name != itemName)
                          setSelectedItems(k)
                        } else {
                          alert("false")
                          var k = selectedItems
                          k.push(itemName)
                          setSelectedItems(k)
                        }
                      }} className='px-2 mx-2' style={{
                        border: 'none',
                        borderRadius: 10,
                        background: (selectedItems.includes(itemName))?'purple':'lightgray',
                        color: (selectedItems.includes(itemName))?'white':'black',
                        fontSize: '12px'
                      }}>{itemName}</p>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
        {nav ? <Navigate to="/expert" /> : null}
        <div className='d-flex'>
          <CustomButton className="mx-1" title='Submit Data to get started' text="Continue" onPress={() => {
            setNav(1)
          }} />
        </div>
      </div>
    </div>
  )
}

export default InputForm