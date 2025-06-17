"use client";

import React, { useState, useEffect, useRef } from "react";

// Custom Input Component
const CustomInput = ({
  type = "text",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
};

// Custom Label Component
const CustomLabel = ({ children, className = "", ...props }) => {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

// Custom Button Component
const CustomButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    default: "bg-[#06a6dd] text-white hover:bg-blue-700 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Card Component
const CustomCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

// Custom Slider Component
const CustomSlider = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
        }}
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

// ✅ Updated Custom Pie Chart Component
const CustomPieChart = ({ data, width = 200, height = 200, colors = [] }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 10;

    ctx.clearRect(0, 0, width, height);

    const total = data.reduce((sum, item) => sum + item.value, 0);

    let currentAngle = -Math.PI / 2;

    data.forEach((item, index) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle =
        colors[index % colors.length] || item.color || "#ccc";
      ctx.fill();

      currentAngle += sliceAngle;
    });
  }, [data, width, height, colors]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="mx-auto"
    />
  );
};

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [duration, setDuration] = useState(2);
  const [durationUnit, setDurationUnit] = useState("Yr");
  const [interestRate, setInterestRate] = useState(11.99);
  const [emiData, setEmiData] = useState({
    emi: 0,
    totalAmount: 0,
    totalInterest: 0,
    principal: 0,
  });

  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = durationUnit === "Yr" ? duration * 12 : duration;

    if (r === 0) {
      const emi = P / n;
      setEmiData({
        emi,
        totalAmount: P,
        totalInterest: 0,
        principal: P,
      });
      return;
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    setEmiData({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: P,
    });
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, duration, durationUnit, interestRate]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const pieChartData = [
    { name: "Principal", value: emiData.principal },
    { name: "Interest", value: emiData.totalInterest },
  ];

  return (
    <div className="p-4 flex items-center justify-center">
      <CustomCard className="w-full max-w-4xl shadow-xl rounded-3xl overflow-hidden">
        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Inputs */}
            <div className="space-y-8">
              {/* Loan Amount */}
              <div className="space-y-4">
                <CustomLabel>Loan Amount</CustomLabel>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                    <span className="text-gray-600 font-medium">₹</span>
                  </div>
                  <CustomInput
                    type="text"
                    value={loanAmount.toLocaleString("en-IN")}
                    onChange={(e) => {
                      const value = e.target.value.replace(/,/g, "");
                      if (!isNaN(Number(value))) setLoanAmount(Number(value));
                    }}
                    className="text-lg font-medium flex-1"
                  />
                </div>
                <CustomSlider
                  value={loanAmount}
                  onChange={setLoanAmount}
                  max={3500000}
                  min={40000}
                  step={10000}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>₹40,000</span>
                  <span>₹35,00,000</span>
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-4">
                <CustomLabel>Loan Duration</CustomLabel>
                <div className="flex items-center gap-2">
                  <CustomInput
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="text-lg font-medium w-20"
                  />
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <CustomButton
                      variant={durationUnit === "Yr" ? "default" : "ghost"}
                      onClick={() => setDurationUnit("Yr")}
                    >
                      Yr
                    </CustomButton>
                    <CustomButton
                      variant={durationUnit === "Mo" ? "default" : "ghost"}
                      onClick={() => setDurationUnit("Mo")}
                    >
                      Mo
                    </CustomButton>
                  </div>
                </div>
                <CustomSlider
                  value={duration}
                  onChange={setDuration}
                  max={durationUnit === "Yr" ? 6 : 72}
                  min={1}
                  step={1}
                />
              </div>

              {/* Interest */}
              <div className="space-y-4">
                <CustomLabel>Rate Of Interest</CustomLabel>
                <div className="flex items-center gap-2">
                  <CustomInput
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="text-lg font-medium flex-1"
                  />
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                    <span className="text-gray-600 font-medium">%</span>
                  </div>
                </div>
                <CustomSlider
                  value={interestRate}
                  onChange={setInterestRate}
                  max={35}
                  min={5}
                  step={0.01}
                />
              </div>
            </div>

            {/* Right Output */}
            <div className="space-y-6">
              <div className="bg-[#06a6dd] rounded-2xl p-6 text-white text-center">
                <div className="text-lg font-medium mb-2">Monthly EMI</div>
                <div className="text-3xl font-bold">
                  ₹{formatCurrency(emiData.emi)}*
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <CustomPieChart
                    data={pieChartData}
                    width={200}
                    height={200}
                    colors={["#06a6dd", "#fdd835"]}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#06a6dd]"></div>
                      <span className="text-gray-700 text-sm">
                        Total Amount Payable
                      </span>
                    </div>
                    <span className="font-bold text-gray-900">
                      ₹{formatCurrency(emiData.totalAmount)}*
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <span className="text-gray-700 text-sm">
                        Total Interest Payable
                      </span>
                    </div>
                    <span className="font-bold text-gray-900">
                      ₹{formatCurrency(emiData.totalInterest)}*
                    </span>
                  </div>
                </div>
              </div>

              <CustomButton className="w-full bg-[#06a6dd]  text-white font-semibold py-3 rounded-xl text-lg">
                Apply Now
              </CustomButton>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  );
}
