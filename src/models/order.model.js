const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
  status: {
    type: String,
    enum: [
      "pending",
      "confirmed",
      "preparing",
      "on_the_way",
      "delivered",
      "cancelled",
    ],
    default: "pending",
  },
  totalPrice: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  courier: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

export const Order = mongoose.model("Order", orderSchema);
