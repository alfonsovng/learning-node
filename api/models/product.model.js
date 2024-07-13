const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        //https://stackoverflow.com/a/77228926
        id: {
            type: mongoose.Schema.Types.ObjectId,
            default: function () {
              return this._id;
            }
        },

        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true
    }
);

//TODO: modificar el JSON d'entrada i sortida per a treure els camps updateAt, createdAt i que _id sigui id

module.exports = mongoose.model("Product", ProductSchema);