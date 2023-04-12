import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Todos'
        },
        {
          key: 'Lámpara',
          name: 'Lámpara'
        },
        {
          key: 'Mesa con sillas',
          name: 'Mesa con sillas'
        },
        {
          key: 'Mesa de cocina',
          name: 'Mesa de cocina'
        },
        {
          key: 'Mesa de ordenador',
          name: 'Mesa de ordenador'
        },
        {
          key: 'Silla',
          name: 'Silla'
        },
        {
          key: 'Sillón',
          name: 'Sillón'
        },
        {
          key: 'Sofá',
          name: 'Sofá'
        },
       
      ]
    }
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories