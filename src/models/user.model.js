const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
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
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false, timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
