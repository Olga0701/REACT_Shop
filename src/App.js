import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Lámpara',
          img: 'Lámpara.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Lámpara',
          price: '49'
        },
        {
          id: 2,
          title: 'Mesa con sillas',
          img: 'Mesa con sillas.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Mesa con sillas',
          price: '100'
        },
        {
          id: 3,
          title: 'Mesa de cocina',
          img: 'Mesa de cocina.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Mesa de cocina',
          price: '150'
        },
        {
          id: 4,
          title: 'Mesa de ordenador',
          img: 'Mesa de ordenador.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Mesa de ordenador',
          price: '200'
        },
        {
          id: 5,
          title: 'Silla',
          img: 'Silla.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Silla',
          price: '60'
        },
        {
          id: 6,
          title: 'Sillón',
          img: 'Sillón.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Sillón',
          price: '80'
        },
        {
          id: 7,
          title: 'Sofá',
          img: 'Sofá.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Sofá',
          price: '120'
        },
        {
          id: 8,
          title: 'Mesa con sillas',
          img: 'Mesa con sillas1.png',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Mesa con sillas',
          price: '90'
        },
        {
          id: 9,
          title: 'Lámpara',
          img: 'Lámpara1.png',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Lámpara',
          price: '85'
        },
        {
          id: 10,
          title: 'Mesa con sillas',
          img: 'Mesa con sillas2.png',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Mesa con sillas',
          price: '60'
        },
        {
          id: 11,
          title: 'Silla',
          img: 'Silla1.png',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, numquam.',
          category: 'Silla',
          price: '40'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
