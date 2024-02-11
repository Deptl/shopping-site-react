import { keyboard } from "@testing-library/user-event/dist/keyboard"
import Cooler from "./assets/cooler.png"
import CoolingFans from "./assets/CoolingFans.png"
import Cpu from "./assets/Cpu.png"
import GraphicsCard from "./assets/Graphics.png"
import Keyboard from "./assets/Keyboard.png"
import Monitor from "./assets/Monitor.png"
import MotherBoard from "./assets/Motherboard.png"
import Mouse from "./assets/Mouse.png"
import Power from "./assets/Power.png"
import Processor from "./assets/Processor.png"
import Ram from "./assets/Ram.png"
import SSD from "./assets/SSD.png"



export const Items = [
    {
        id: 1,
        itemName: "ASUS ROG Motherboard",
        price: 1999.99,
        description: "Contains 4 Ram and 2 SSD slots",
        image: MotherBoard
    },
    {
        id: 2,
        itemName: "Corsair CPU Cooler",
        description: "Keeps your CPU cool with 3 Fans",
        price: 1999.99,
        image: Cooler
    },
    {
        id: 3,
        itemName: "Corsair Cooling Fans",
        description: "3 Fans in 1 pack",
        price: 1999.99,
        image: CoolingFans
    },
    {
        id: 4,
        itemName: "Corsair CPU Cabinet",
        description: "Large Cabinet with 3 Inbuilt fans",
        price: 1999.99,
        image: Cpu
    },
    {
        id: 5,
        itemName: "NVDIA GeForce RTX 4090",
        description: "Coolest Graphics Card ever",
        price: 1999.99,
        image: GraphicsCard
    },
    {
        id: 6,
        itemName: "ASUS Gaming Keyboard",
        description: "Blue Switch Mechenical Keyboard",
        price: 1999.99,
        image: Keyboard
    },
    {
        id: 7,
        itemName: "ASUS Gaming Monitor",
        description: "LED Monitor with 240Hz refresh rate",
        price: 1999.99,
        image: Monitor
    },
    {
        id: 8,
        itemName: "Gaming Mouse",
        description: "Mouse with multifunction keys",
        price: 1999.99,
        image: Mouse
    },
    {
        id: 9,
        itemName: "Power for CPU",
        description: "Asus ROG Thor ultra power hub",
        price: 1999.99,
        image: Power
    },
    {
        id: 10,
        itemName: "Intel i9 14900H Processor",
        description: "Fastest processor ever built",
        price: 1999.99,
        image: Processor
    },
    {
        id: 11,
        itemName: "HyperX 2X8GB RAM",
        description: "HYperx DDR5 Ram 2 sticks",
        price: 1999.99,
        image: Ram
    },
    {
        id: 12,
        itemName: "Samsung SSD 2TB",
        description: "Nvme for ultrafast data transfer",
        price: 1999.99,
        image: SSD
    },
];