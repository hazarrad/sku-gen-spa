
import { useEffect, useState } from 'react';
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for charts
const usageData = [
  { month: 'Jan', barcodes: 1200, skus: 950 },
  { month: 'Feb', barcodes: 1900, skus: 1550 },
  { month: 'Mar', barcodes: 2400, skus: 1800 },
  { month: 'Apr', barcodes: 1800, skus: 1650 },
  { month: 'May', barcodes: 2800, skus: 2400 },
  { month: 'Jun', barcodes: 3600, skus: 3200 },
];

const efficiencyData = [
  { name: 'Manual Input', time: 120 },
  { name: 'Basic Tools', time: 90 },
  { name: 'SKUGen', time: 30 },
];

const DataChart = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevents hydration issues
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="usage" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="usage">Usage Statistics</TabsTrigger>
          <TabsTrigger value="efficiency">Efficiency Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="usage" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg sm:text-xl">Monthly Barcode & SKU Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={usageData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="barcodes"
                      name="Barcodes Generated"
                      stroke="#0EA5E9"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="skus"
                      name="SKUs Created"
                      stroke="#64748B"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="efficiency" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-lg sm:text-xl">Time to Generate 100 Barcodes (seconds)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] sm:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={efficiencyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" horizontal={false} />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }} />
                    <Bar
                      dataKey="time"
                      name="Time (seconds)"
                      fill="#0EA5E9"
                      barSize={40}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                SKUGen is 4x faster than manual entry and 3x faster than basic tools
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataChart;
