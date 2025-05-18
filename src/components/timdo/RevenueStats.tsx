"use client"

export default function RevenueStats() {
  // Giả sử tổng doanh thu
  const totalRevenue = 10000000 // 10 triệu VND

  // Tính toán phân chia doanh thu
  const adminShare = totalRevenue * 0.3 // 30% cho cộng tác viên
  const ownerShare = totalRevenue * 0.7 // 70% cho chủ

  const stats = [
    {
      label: "💰 Tổng lợi nhuận chung",
      value: new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(totalRevenue),
      className: "text-blue-600",
    },
    {
      label: "👩‍💼 Phần của bạn từ nỗ lực chung (30%)",
      value: new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(adminShare),
      className: "text-green-600",
    },
    {
      label: "🏠 Phần của đối tác từ nỗ lực chung (70%)",
      value: new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(ownerShare),
      className: "text-purple-600",
    },
    {
      label: "📅 Giá trị hợp tác hôm nay",
      value: new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(1000000),
      className: "text-orange-600",
    },
    {
      label: "📆 Giá trị hợp tác tháng này",
      value: new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(5000000),
      className: "text-red-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 flex items-center gap-2">{stat.label}</p>
          <h3
            className={`text-xl font-bold flex items-center gap-2 ${stat.className}`}
          >
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  )
}
