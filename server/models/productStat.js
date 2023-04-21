import mongoose from "mongoose"

const ProductStatSchema = new mongoose.Schema(
   {
        productId: String,
        yearlySalesTotal: Number,
        yearlySalesTotalUnits:Number,
        year:Number,
        monthlyData:[
            {
            month: String,
            totalSales: Number,
            totalUnits: Number,
            }
        ],
        dailyData: [
            {
                data:String,
                totalSales:Number,
                totalUnits: Number,
            }
        ]
   },
   {timestamps:true} 
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema)
export default ProductStat;