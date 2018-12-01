// pages/component/home/home.js
var that
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cartShow: true,
        dishCount: 0,
        countPrice: 0,
        menus: [
            {
                id: 1,
                menu_name: '必选'
            },
            {
                id: 2,
                menu_name: '凉菜'
            }
        ],
        dishes: [
            {
                id: 1,
                dish_name: '纸包鱼-01',
                dish_price: 11,
                dish_sales: 1,
                dish_num: 0
            },
            {
                id: 2,
                dish_name: '纸包鱼-02',
                dish_price: 12,
                dish_sales: 2,
                dish_num: 0
            },
            {
                id: 3,
                dish_name: '纸包鱼-03',
                dish_price: 13,
                dish_sales: 3,
                dish_num: 0
            }
        ],
        cart: {
            dish_count: 0,
            count_price: 0,
            cart_dishes: []
        }

    },

    showCart: function () {
        that.setData({
            cartShow: false

        })
        console.log("是否显示值改变")
    },


    // 点击某个菜系, 显示该菜系下面的所有菜品
    selectMenu: function () {

    },
    // 菜品数量减一
    minusCount: function (e) {
        var click_id = e.currentTarget.dataset.id;
        let _dishes = that.data.dishes;
        let _cart = that.data.cart;
        let dish = _dishes.find(function (v) {
            return click_id == v.id;
        });
        // let _cart_dishes = _cart.cart_dishes.find(function (v) {
        //   return click_id == v.id;
        // });
        let _cart_dishes;
        let index;
        for (var i = 0; i < _cart.cart_dishes.length; i++) {
            if (click_id == _cart.cart_dishes[i].id) {
                _cart_dishes = _cart.cart_dishes[i];
                index = i;
                break;
            }
        }
        dish.dish_num -= 1;
        _cart.dish_count -= 1;
        _cart.count_price -= dish.dish_price;
        if (_cart_dishes.dish_num != 1) {
            _cart_dishes.dish_num -= 1;
            console.log("购物车数量减一")
        } else {
            console.log("从购物车中移除")
            _cart.cart_dishes.splice(index, 1);
        }
        that.setData({
            dishes: _dishes,
            cart: _cart
        });
    },
    // 菜品数量加一
    addCount: function (e) {
        // 获取点击菜品的id
        var click_id = e.currentTarget.dataset.id;
        let _dishes = that.data.dishes;
        let _cart = that.data.cart;
        let dish = _dishes.find(function (v) {
            return click_id == v.id;
        });
        let _cart_dishes = _cart.cart_dishes.find(function (v) {
            return click_id == v.id;
        });
        dish.dish_num += 1;
        _cart.dish_count += 1;
        _cart.count_price += dish.dish_price;
        if (_cart_dishes) {
            console.log('购物车数量加一')
            _cart_dishes.dish_num += 1;
        } else {
            console.log('添加到购物车')
            _cart.cart_dishes.push(dish);
        }
        that.setData({
            dishes: _dishes,
            cart: _cart
        });
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        that = this
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})