
import { useState } from 'react';
import DataChart from './DataChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const statisticsData = [
  { title: "Barcodes Generated", value: "1.2M+", change: "+24%" },
  { title: "Active Users", value: "5,400+", change: "+18%" },
  { title: "Time Saved", value: "30K hrs", change: "+35%" },
  { title: "Accuracy Rate", value: "99.9%", change: "+0.4%" }
];

const DataVisualization = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Performance</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our platform is helping businesses improve their productivity and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statisticsData.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">{stat.title}</h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold mr-2">{stat.value}</span>
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <DataChart />
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
