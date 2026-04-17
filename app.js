/**
 * Farmer Mandi Intelligence Dashboard
 * Implements the Core Features and Important Functions from the Guide
 */

// --- TRANSLATIONS (i18n) ---
const translations = {
    en: {
        appTitle: "Mandi<span class='text-emerald'>Intel</span>",
        menuTrends: "Market Trends",
        menuBest: "Best Mandis",
        menuAI: "AI Predictions",
        menuCalc: "Profit Calculator",
        filterTitle: "Crop & Mandi Filters",
        selectCrop: "Select Crop",
        selectMandi: "Select Mandi",
        allCrops: "All Crops",
        allMandis: "All Mandis",
        applyBtn: "Apply Filters",
        overviewTitle: "30-Day Market Overview",
        profileName: "Farmer Profit Portal",
        bestMandiLabel: "Best Mandi Right Now",
        maxPriceLabel: "Max Current Price",
        suggestedLabel: "Suggested Action",
        chartTitle: "Price Trend & 7-Day Prediction",
        chartBadge: "Moving Average Model",
        insightsTitle: "Farmer-Focused Insights",
        noData: "Insufficient data to generate specific insights. Try another crop/mandi.",
        sellImmediate: "Sell Immediately",
        waitSell: "Wait & Sell on",
        priceRise: "Prices are expected to rise over the next 7 days. Expected peak: ",
        priceDecline: "Prices show a declining trend. Consider selling early.",
        highestPrice: "Highest price for",
        inMandi: "is in",
        atPrice: "at ₹",
        perQtl: "/Qtl",
        calcTitle: "Profit Calculator",
        calcQty: "Quantity (Quintals)",
        calcTransport: "Transport Cost (₹)",
        calcOther: "Other Costs (₹)",
        calcBtn: "Calculate Profit",
        calcResult: "Expected Profit:",
        calcError: "Please select a crop with a valid price first!",
        useDummyData: "Switch to Dummy Data",
        useRealData: "Switch to Real API Data",
        finderTitle: "Best Mandi Finder",
        finderCrop: "Target Crop",
        finderFactor: "Optimization Factor",
        factorPrice: "Highest Selling Price",
        factorDistance: "Closest Distance (Simulated)",
        factorVolume: "Highest Trade Volume (Simulated)",
        finderBtn: "Find Best Mandis",
        aiModelLabel: "AI Brain (OpenRouter)",
        aiModelDefault: "Default Mode (Math Rules)",
        menuNearest: "Nearest Mandi",
        nearestTitle: "GPS Mandi Graph",
        nearestDesc: "Allow GPS access to triangulate closest agricultural markets into a web network."
    },
    hi: {
        appTitle: "मंडी<span class='text-emerald'>इंटेल</span>",
        menuTrends: "बाजार के रुझान",
        menuBest: "सर्वश्रेष्ठ मंडिया",
        menuAI: "AI भविष्यवाणियां",
        menuCalc: "लाभ कैलकुलेटर",
        filterTitle: "फसल और मंडी फ़िल्टर",
        selectCrop: "फसल चुनें",
        selectMandi: "मंडी चुनें",
        allCrops: "सभी फसलें",
        allMandis: "सभी मंडियां",
        applyBtn: "फ़िल्टर लागू करें",
        overviewTitle: "30-दिन का बाजार अवलोकन",
        profileName: "किसान लाभ पोर्टल",
        bestMandiLabel: "अभी सबसे अच्छी मंडी",
        maxPriceLabel: "अधिकतम वर्तमान मूल्य",
        suggestedLabel: "सुझाए गए कदम",
        chartTitle: "मूल्य रुझान और 7 दिन की भविष्यवाणी",
        chartBadge: "मूविंग एवरेज मॉडल",
        insightsTitle: "किसान-केंद्रित अंतर्दृष्टि",
        noData: "विशिष्ट अंतर्दृष्टि उत्पन्न करने के लिए अपर्याप्त डेटा। कोई अन्य फसल/मंडी आज़माएं।",
        sellImmediate: "अभी बेचें",
        waitSell: "रुके और बेचें: ",
        priceRise: "अगले 7 दिनों में कीमतें बढ़ने की उम्मीद है। अपेक्षित शिखर: ₹",
        priceDecline: "कीमतों में गिरावट का रुझान है। जल्दी बेचने पर विचार करें।",
        highestPrice: "",
        inMandi: "की अधिकतम कीमत",
        atPrice: "में है: ₹",
        perQtl: "/क्विंटल",
        calcTitle: "लाभ कैलकुलेटर",
        calcQty: "मात्रा (क्विंटल)",
        calcTransport: "परिवहन लागत (₹)",
        calcOther: "अन्य लागत (₹)",
        calcBtn: "लाभ की गणना करें",
        calcResult: "अपेक्षित लाभ:",
        calcError: "कृपया पहले मान्य मूल्य वाली फसल चुनें!",
        useDummyData: "डमी डेटा पर स्विच करें",
        useRealData: "रियल API डेटा पर स्विच करें",
        finderTitle: "सर्वश्रेष्ठ मंडी खोजक",
        finderCrop: "लक्षित फसल",
        finderFactor: "अनुकूलन कारक",
        factorPrice: "उच्चतम बिक्री मूल्य",
        factorDistance: "निकटतम दूरी (सिम्युलेटेड)",
        factorVolume: "उच्चतम व्यापार मात्रा (सिम्युलेटेड)",
        finderBtn: "सर्वश्रेष्ठ मंडी खोजें",
        aiModelLabel: "AI मस्तिष्क (OpenRouter)",
        aiModelDefault: "डिफ़ॉल्ट मोड (गणित नियम)",
        menuNearest: "निकटतम मंडी",
        nearestTitle: "GPS मंडी ग्राफ़",
        nearestDesc: "निकटतम कृषि बाजारों को एक वेब नेटवर्क में त्रिकोणीय बनाने के लिए GPS एक्सेस की अनुमति दें।"
    }
};

let currentLang = 'en';

const dataDictionary = {
    // Crops
    'Wheat': 'गेहूं',
    'Tomato': 'टमाटर',
    'Potato': 'आलू',
    'Rice': 'चावल',
    'Cotton': 'कपास',
    'Guar': 'ग्वार',
    'Cauliflower': 'फूलगोभी',
    'Onion': 'प्याज',
    'Apple': 'सेब',
    'Cotton': 'कपास',
    // Mandis
    'Azadpur': 'आजादपुर',
    'Nashik': 'नासिक',
    'Karnal': 'करनाल',
    'Vadhvan APMC': 'वधवान APMC',
    'Pune': 'पुणे'
};

const translateData = (text) => {
    if (currentLang === 'en' || !text) return text;
    // Basic lookup; return original if no match
    return dataDictionary[text] || text;
};

const setLanguage = (lang) => {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; // HTML inside titles
        }
    });

    const cropSelect = document.getElementById('cropSelect');
    if (cropSelect.options.length > 0) {
        cropSelect.options[0].text = translations[lang].allCrops;
    }
    
    const mandiSelect = document.getElementById('mandiSelect');
    if (mandiSelect.options.length > 0) {
        mandiSelect.options[0].text = translations[lang].allMandis;
    }

    if (chartInstance) {
        // Redraw chart labels translated
        updateUI(true);
    }
};

// 1. fetchMandiData()
const fetchMandiData = async () => {
    if (window.useDummyData) {
        return getFallbackData();
    }

    // IMPORTANT: Replace with your actual data.gov.in API Key
    const apiKey = '579b464db66ec23bdd000001dab535d96e8c4b275a7237ec6dc2740f';
    const resourceId = '9ef84268-d588-465a-a308-a864a43d0070'; // Agmarknet Daily Mandi Price Resource ID
    const url = `https://api.data.gov.in/resource/${resourceId}?api-key=${apiKey}&format=json&limit=500`;

    try {
        const response = await fetch(url);
        const json = await response.json();

        if (json.records && json.records.length > 0) {
            console.log("Successfully fetched Agmarknet data from data.gov.in");
            // Map data.gov.in JSON fields to our dashboard structure
            return json.records.map(record => {
                // Convert DD/MM/YYYY to YYYY-MM-DD for standard JS Date parsing
                let isoDate = record.arrival_date;
                if (isoDate && isoDate.includes('/')) {
                    const parts = isoDate.split('/');
                    if (parts.length === 3) isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
                }
                
                return {
                    mandi: record.market,
                    crop: record.commodity,
                    date: isoDate,
                    price: parseFloat(record.modal_price) || 0
                };
            });
        } else {
            console.warn('API returned error or no records (Check API Key). Falling back to mock data.', json);
            return getFallbackData();
        }
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return getFallbackData();
    }
};

const getFallbackData = () => {
    // Generate 30 days of simulated 'trading' style dummy data to demonstrate volatility
    const generateSeries = (mandi, crop, startPrice, endPrice, volatility) => {
        let series = [];
        let curDate = new Date();
        curDate.setDate(curDate.getDate() - 30); // 30 days dynamically backwards
        let curPrice = startPrice;
        let step = (endPrice - startPrice) / 30;

        for (let i = 0; i < 30; i++) {
            series.push({
                mandi: mandi,
                crop: crop,
                date: curDate.toISOString().split('T')[0],
                price: Math.round(curPrice)
            });
            curDate.setDate(curDate.getDate() + 1);
            // Random walk added to steps to mimic candle volatility
            curPrice += step + (Math.random() * volatility * 2 - volatility);
        }
        return series;
    };

    return [
        ...generateSeries('Azadpur', 'Tomato', 2500, 1200, 200), // Massive Downfall (Bear Market)
        ...generateSeries('Nashik', 'Tomato', 1800, 1500, 90),   
        ...generateSeries('Karnal', 'Wheat', 2000, 2600, 60),    // Bullish Uptrend
        ...generateSeries('Azadpur', 'Wheat', 2100, 2350, 40)
    ];
};

// 2. cleanData()
const cleanData = (data) => {
    // Remove duplicates or invalid entries (e.g. absent price or missing mandi)
    return data.filter(item => item.price > 0 && item.mandi && item.crop);
};

// 3. filterByCrop()
const filterByCrop = (data, crop) => {
    if (!crop || crop === 'All') return data;
    return data.filter(item => item.crop === crop);
};

// 4. filterByMandi()
const filterByMandi = (data, mandi) => {
    if (!mandi || mandi === 'All') return data;
    return data.filter(item => item.mandi === mandi);
};

// 5. getPriceTrend()
const getPriceTrend = (data, mandi, crop) => {
    // Extract time series of prices for a specific mandi and crop
    const filtered = filterByMandi(filterByCrop(data, crop), mandi);
    // sort by date
    return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
};

// 6. movingAverage()
// Formula: MA = (x1 + x2 + ... + xn) / n
const movingAverage = (prices, windowSize) => {
    if (prices.length === 0) return [];
    let ma = [];
    for (let i = 0; i < prices.length; i++) {
        let start = Math.max(0, i - windowSize + 1);
        let subset = prices.slice(start, i + 1);
        let sum = subset.reduce((a, b) => a + b, 0);
        ma.push(sum / subset.length);
    }
    return ma;
};

// 7. predictPrices()
const predictPrices = (trendData, daysOut = 7) => {
    if (trendData.length === 0) return [];
    const prices = trendData.map(item => item.price);
    const ma = movingAverage(prices, 3); // using last 3 points

    const lastMA = ma[ma.length - 1];
    const predictions = [];

    // Simple naive prediction logic based on recent momentum
    let momentum = 0;
    if (prices.length >= 2) {
        momentum = (prices[prices.length - 1] - prices[prices.length - 2]) * 0.5;
    }

    let currentPrice = prices[prices.length - 1];
    let currentDate = new Date(trendData[trendData.length - 1].date);

    for (let i = 1; i <= daysOut; i++) {
        currentPrice = currentPrice + momentum; // simulate trend
        // dampen momentum
        momentum *= 0.8;

        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);

        predictions.push({
            date: nextDate.toISOString().split('T')[0],
            price: Math.round(currentPrice)
        });
    }
    return predictions;
};

// 8. findBestMandi()
const findBestMandi = (data, crop) => {
    const cropData = filterByCrop(data, crop);
    if (cropData.length === 0) return null;

    // Find the mandi with the highest most-recent price
    const latestPrices = {};
    cropData.forEach(item => {
        if (!latestPrices[item.mandi] || new Date(item.date) > new Date(latestPrices[item.mandi].date)) {
            latestPrices[item.mandi] = item;
        }
    });

    let bestMandi = null;
    let maxP = -1;
    Object.values(latestPrices).forEach(item => {
        if (item.price > maxP) {
            maxP = item.price;
            bestMandi = item;
        }
    });

    return bestMandi;
};

// 9. generateInsights()
const generateInsights = async (bestMandi, predictions) => {
    const insightsContainer = document.getElementById('insightsContainer');
    const t = translations[currentLang];
    
    // Show loading state
    insightsContainer.innerHTML = `<div class="insight-item info" style="display:flex; align-items:center; gap:8px;">
        <i class="fa-solid fa-spinner fa-spin"></i> OpenRouter AI is actively analyzing the ${predictions.length}-day market curve...
    </div>`;

    let userPrompt = "I don't have enough data to analyze yet.";
    if (bestMandi && predictions.length > 0) {
        const mcrop = translateData(bestMandi.crop);
        const mmandi = translateData(bestMandi.mandi);
        userPrompt = `You are a Farmer AI Advisor. The current best mandi for ${mcrop} is ${mmandi} hovering around ₹${bestMandi.price}/Qtl. Looking at a 7-day algorithmic trajectory, the simulated prices will be: ${predictions.map(p => `₹${p.price}`).join(', ')}. Write exactly 2 very short, extremely concise bullet points (max 15 words each). Bullet 1: Suggest a timeline on when to sell. Bullet 2: Overall market trend summary. Reply IN ${currentLang === 'hi' ? 'HINDI language strictly' : 'ENGLISH language'}. Do not use markdown bolding **.`;
    }

    const openRouterKey = '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';
    const activeModel = document.getElementById('aiModelSelect').value;
    
    // Fallback translation prep
    const c = translateData(bestMandi?.crop) || "--";
    const m = translateData(bestMandi?.mandi) || "--";
    const p = bestMandi?.price || 0;
    
    let rootInsight = currentLang === 'en' 
        ? `<div class="insight-item success">${t.highestPrice} ${c} ${t.inMandi} ${m} ${t.atPrice}${p}${t.perQtl}.</div>`
        : `<div class="insight-item success">${c} ${t.inMandi} ${m} ${t.atPrice}${p}${t.perQtl}.</div>`;

    // Execute standard math deterministic mode
    if (activeModel === 'default') {
        let mathStr = '';
        if (predictions && predictions.length > 0) {
            let maxPred = Math.max(...predictions.map(pred => pred.price));
            let lastPred = predictions[predictions.length - 1].price;
            if (lastPred > predictions[0].price) {
                mathStr = `<div class="insight-item info"><i class="fa-solid fa-chart-line"></i> ${t.priceRise}${maxPred}.</div>`;
            } else {
                mathStr = `<div class="insight-item warning"><i class="fa-solid fa-arrow-trend-down"></i> ${t.priceDecline}</div>`;
            }
        }
        insightsContainer.innerHTML = rootInsight + mathStr;
        return;
    }

    // Execute OpenRouter AI Integration
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${openRouterKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": activeModel,
                "messages": [
                    { "role": "user", "content": userPrompt }
                ]
            })
        });

        const data = await response.json();
        const aiMessage = data.choices[0].message.content.trim();

        // Parse AI response into stylized divs
        let formattedStr = '';
        const splits = aiMessage.split('\n').filter(l => l.trim().length > 0);
        splits.forEach(line => {
            let cleanLine = line.replace(/^[-\*•]\s*/, ''); // Remove bullet chars
            formattedStr += `<div class="insight-item warning"><i class="fa-solid fa-bolt"></i> ${cleanLine}</div>`;
        });

        insightsContainer.innerHTML = rootInsight + formattedStr;

    } catch (err) {
        console.error("OpenRouter API Failed:", err);
        insightsContainer.innerHTML = `<div class="insight-item warning">${t.noData} (AI Server Timeout)</div>`;
    }
};

// 10. suggestSellingTime()
const suggestSellingTime = (predictions) => {
    if (!predictions || predictions.length === 0) return "Not enough data";

    const maxPred = [...predictions].sort((a, b) => b.price - a.price)[0];
    const firstPred = predictions[0];

    if (maxPred.price > firstPred.price) {
        // format date gently
        return `Wait & Sell on ${maxPred.date}`;
    } else {
        return `Sell Immediately`;
    }
};

// --- DOM LOGIC & UI INTEGRATION (PAUL Phase 3 & 4) ---
let chartInstance = null;

const renderChart = (historicalData, predictedData) => {
    const ctx = document.getElementById('priceChart').getContext('2d');

    const labels = [...historicalData.map(d => d.date), ...predictedData.map(d => d.date)];
    const historyPrices = historicalData.map(d => d.price);

    // To connect the line, start prediction with last known historical data (or null it)
    const predictionsPrices = Array(historicalData.length).fill(null);
    if (historicalData.length > 0 && predictedData.length > 0) {
        predictionsPrices[historicalData.length - 1] = historicalData[historicalData.length - 1].price;
    }
    predictionsPrices.push(...predictedData.map(d => d.price));

    if (chartInstance) chartInstance.destroy();

    // Determine trend to color graph red or green like a trading app
    const isBearish = historyPrices.length > 2 && historyPrices[historyPrices.length - 1] < historyPrices[0];
    const mainColor = isBearish ? '#ef4444' : '#10b981'; // Red for down, Green for up
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 400);
    
    if (isBearish) {
        bgGradient.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
        bgGradient.addColorStop(1, 'rgba(239, 68, 68, 0.0)');
    } else {
        bgGradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
        bgGradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: currentLang === 'en' ? 'Historical Prices' : 'ऐतिहासिक कीमतें',
                    data: historyPrices,
                    borderColor: mainColor,
                    backgroundColor: bgGradient,
                    fill: true,
                    tension: 0.1, // Sharper tension for trading aesthetic
                    pointRadius: 0, // Hiding dots for line clarity
                    pointHoverRadius: 6,
                    borderWidth: 2
                },
                {
                    label: currentLang === 'en' ? '7-Day Prediction' : '7 दिन की भविष्यवाणी',
                    data: predictionsPrices,
                    borderColor: '#38bdf8',
                    borderDash: [4, 4],
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.1,
                    pointRadius: 3,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false, // Core trading feature (Crosshair Tooltip)
            },
            plugins: {
                legend: { labels: { color: '#f8fafc', usePointStyle: true } },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#38bdf8',
                    bodyColor: '#f8fafc',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 12
                }
            },
            scales: {
                x: { 
                    ticks: { color: '#94a3b8', maxTicksLimit: 10 }, 
                    grid: { display: false } 
                },
                y: { 
                    ticks: { color: '#94a3b8' }, 
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    position: 'right' // Trading apps traditionally align Y-axis to the right
                }
            }
        }
    });
};

let isFiltersPopulated = false;

const updateUI = async (skipFetch = false) => {
    const t = translations[currentLang];
    const loader = document.getElementById('globalLoader');

    try {
        let rawData = [];
        if (!skipFetch && !window.__cachedRawData) {
            if (loader) {
                loader.style.visibility = 'visible';
                loader.style.opacity = '1';
                loader.style.display = 'flex';
                loader.classList.remove('swapped');
            }
            rawData = await fetchMandiData();
            window.__cachedRawData = rawData;
        } else {
            rawData = window.__cachedRawData || await fetchMandiData();
        }
        
        const clean = cleanData(rawData);

        // Dynamically populate filters based on available data
        if (!isFiltersPopulated) {
            const uniqueCrops = [...new Set(clean.map(item => item.crop))].sort();
            const uniqueMandis = [...new Set(clean.map(item => item.mandi))].sort();

            const cropSelect = document.getElementById('cropSelect');
            cropSelect.innerHTML = `<option value="All">${t.allCrops}</option>`;
            
            const finderCropSelect = document.getElementById('finderCropSelect');
            finderCropSelect.innerHTML = '';
            
            uniqueCrops.forEach(crop => {
                const optText = translateData(crop);
                cropSelect.innerHTML += `<option value="${crop}">${optText}</option>`;
                finderCropSelect.innerHTML += `<option value="${crop}">${optText}</option>`;
            });

            const mandiSelect = document.getElementById('mandiSelect');
            mandiSelect.innerHTML = `<option value="All">${t.allMandis}</option>`;
            uniqueMandis.forEach(mandi => {
                const optText = translateData(mandi);
                mandiSelect.innerHTML += `<option value="${mandi}">${optText}</option>`;
            });

            isFiltersPopulated = true;
        }

        const crop = document.getElementById('cropSelect').value;
        const mandi = document.getElementById('mandiSelect').value;

        let chartCrop = crop === 'All' ? clean[0]?.crop || 'Wheat' : crop;
        let chartMandi = mandi === 'All' ? clean[0]?.mandi || 'Azadpur' : mandi;

        const trend = getPriceTrend(clean, chartMandi, chartCrop);
        const predictions = predictPrices(trend, 7);

        renderChart(trend, predictions);

        // Update Top Row Metrics
        const bestMandiInfo = findBestMandi(clean, chartCrop);
        if (bestMandiInfo) {
            window.currentBestPrice = bestMandiInfo.price;
            document.getElementById('bestMandiDisplay').innerText = translateData(bestMandiInfo.mandi);
            document.getElementById('maxPriceDisplay').innerText = `₹ ${bestMandiInfo.price}${t.perQtl}`;
        } else {
            window.currentBestPrice = 0;
            document.getElementById('bestMandiDisplay').innerText = "--";
            document.getElementById('maxPriceDisplay').innerText = `₹ --${t.perQtl}`;
        }

        const action = suggestSellingTime(predictions);
        document.getElementById('suggestedActionDisplay').innerText = action;

        // Update Insights Panel asynchronously
        await generateInsights(bestMandiInfo, predictions);

        // Terminate and fade out global loader with an absolute 2-second timeout
        if (loader && !loader.classList.contains('swapped')) {
            loader.classList.add('swapped');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.visibility = 'hidden';
                    loader.style.display = 'none';
                }, 600);
            }, 2000);
        }

    } catch (e) {
        console.error("UI Update Failed:", e);
        document.getElementById('suggestedActionDisplay').innerText = "Error Loading";
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    document.getElementById('applyFilters').addEventListener('click', () => updateUI(false));
    document.querySelectorAll('.cyber-select').forEach(el => {
        el.addEventListener('change', () => updateUI(false));
    });
    
    // Language Switcher Logic
    document.getElementById('langSwitcher').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Profit Calculator Modal Logic
    const calcModal = document.getElementById('calcModal');
    document.getElementById('calcMenuBtn').addEventListener('click', () => {
        calcModal.classList.remove('hidden');
    });
    document.getElementById('closeCalc').addEventListener('click', () => {
        calcModal.classList.add('hidden');
        document.getElementById('calcResultDisplay').classList.add('hidden');
    });
    
    // Profit Calculation Math
    document.getElementById('calcProfitBtn').addEventListener('click', () => {
        const qty = parseFloat(document.getElementById('calcQty').value) || 0;
        const transport = parseFloat(document.getElementById('calcTransport').value) || 0;
        const other = parseFloat(document.getElementById('calcOther').value) || 0;
        
        const bestPrice = window.currentBestPrice || 0;
        if (bestPrice === 0) {
            alert(translations[currentLang].calcError);
            return;
        }
        
        const gross = qty * bestPrice;
        const profit = gross - transport - other;
        
        const resultDisplay = document.getElementById('calcResultDisplay');
        const profitValue = document.getElementById('calcProfitValue');
        
        resultDisplay.classList.remove('hidden');
        profitValue.innerText = `₹ ${profit.toLocaleString('en-IN')}`;
        
        if (profit < 0) {
            profitValue.style.color = '#ef4444'; // Red for loss
            resultDisplay.style.borderLeftColor = '#ef4444';
        } else {
            profitValue.style.color = '#10b981'; // Emerald for profit
            resultDisplay.style.borderLeftColor = '#10b981';
        }
    });

    // Toggle Data Mode Logic
    window.useDummyData = false;
    const toggleDataBtn = document.getElementById('toggleDataBtn');
    toggleDataBtn.addEventListener('click', () => {
        window.useDummyData = !window.useDummyData;
        window.__cachedRawData = null; // Flush cache
        isFiltersPopulated = false; // Force re-population of filters based on new data

        // Update translations
        const key = window.useDummyData ? 'useRealData' : 'useDummyData';
        toggleDataBtn.setAttribute('data-i18n', key);
        toggleDataBtn.innerText = translations[currentLang][key];

        // Trigger refetch
        updateUI();
    });

    // Best Mandi Finder Logic
    const bestMandiModal = document.getElementById('bestMandiModal');
    document.getElementById('bestMandiMenuBtn').addEventListener('click', () => {
        bestMandiModal.classList.remove('hidden');
    });
    document.getElementById('closeFinder').addEventListener('click', () => {
        bestMandiModal.classList.add('hidden');
        document.getElementById('finderResults').innerHTML = '';
    });

    document.getElementById('findBestMandiBtn').addEventListener('click', () => {
        const crop = document.getElementById('finderCropSelect').value;
        const factor = document.getElementById('finderFactorSelect').value;
        const resultsBox = document.getElementById('finderResults');
        resultsBox.innerHTML = '';
        
        let clean = cleanData(window.__cachedRawData || []);
        let cropData = filterByCrop(clean, crop);
        
        if (cropData.length === 0) {
            resultsBox.innerHTML = `<div class="insight-item info">${translations[currentLang].noData}</div>`;
            return;
        }

        // Get latest price for each mandi
        const latestPrices = {};
        cropData.forEach(item => {
            if (!latestPrices[item.mandi] || new Date(item.date) > new Date(latestPrices[item.mandi].date)) {
                latestPrices[item.mandi] = item;
            }
        });
        
        let candidates = Object.values(latestPrices);
        
        if (factor === 'price') {
            candidates.sort((a,b) => b.price - a.price);
        } else if (factor === 'distance') {
            // Simulated distance based on consistent string hash logic
            candidates.forEach(c => {
                let hash = 0; for(let i=0; i<c.mandi.length; i++) hash += c.mandi.charCodeAt(i);
                c.score = hash % 500 + 10; // 10 to 510 km
            });
            candidates.sort((a,b) => a.score - b.score);
        } else if (factor === 'volume') {
            // Simulated volume
            candidates.forEach(c => {
                let hash = 0; for(let i=0; i<c.mandi.length; i++) hash += c.mandi.charCodeAt(i);
                c.score = (hash % 100) * 50 + 1000; // 1000 to 6000 MT
            });
            candidates.sort((a,b) => b.score - a.score);
        }
        
        // Render top 3 recommendations
        candidates.slice(0, 3).forEach((c, idx) => {
            let label = (factor === 'price') ? `₹${c.price}/Qtl` 
                      : (factor === 'distance') ? `${c.score} KM Away`
                      : `${c.score} MT Volume`;
            resultsBox.innerHTML += `
                <div class="insight-item success" style="margin-bottom:8px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <strong>#${idx+1} ${translateData(c.mandi)}</strong>
                        <span class="badge" style="background:var(--emerald-light); color:var(--emerald)">${label}</span>
                    </div>
                </div>
            `;
        });
    });

    // ----------------------------------------------------
    // GPS Mandi Locator Web-Graph Node Logic
    // ----------------------------------------------------
    const nearestModal = document.getElementById('nearestMandiModal');
    document.getElementById('nearestMandiMenuBtn').addEventListener('click', () => {
        nearestModal.classList.remove('hidden');
    });
    document.getElementById('closeNearest').addEventListener('click', () => {
        nearestModal.classList.add('hidden');
        document.getElementById('gpsPromptBlock').classList.remove('hidden');
        document.getElementById('gpsResultsBlock').classList.add('hidden');
        document.getElementById('graphContainer').innerHTML = '';
        document.getElementById('gpsLoadingBlock').classList.add('hidden');
    });

    // Haversine Formula for geo-distance
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    };

    // Dictionary of core coordinates for live and dummy nodes
    const mandiCoordinates = {
        'Azadpur': { lat: 28.7360, lng: 77.1728 },
        'Nashik': { lat: 20.0000, lng: 73.7845 },
        'Karnal': { lat: 29.6857, lng: 76.9905 },
        'Pune': { lat: 18.5204, lng: 73.8567 },
        'Vadhvan APMC': { lat: 19.8516, lng: 72.8252 }
    };

    document.getElementById('requestGpsBtn').addEventListener('click', () => {
        document.getElementById('gpsPromptBlock').classList.add('hidden');
        document.getElementById('gpsLoadingBlock').classList.remove('hidden');

        // Request browser permission
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                renderMandiGraph(userLat, userLng);
            }, (error) => {
                let reason = "failed to resolve";
                if (error.code === error.PERMISSION_DENIED) reason = "is already BLOCKED in your browser settings (Click the lock icon in your URL bar to reset it)";
                if (error.code === error.POSITION_UNAVAILABLE) reason = "is unavailable on this specific MacOS network";
                if (error.code === error.TIMEOUT) reason = "timed out";
                
                alert(`Hardware GPS request ${reason}!\n\nInitiating radar with simulated central-India coordinates instead so you can see the feature.`);
                console.warn('GPS Denied or Timeout:', error);
                renderMandiGraph(23.2599, 77.4126); 
            }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
        } else {
            alert('Your browser does not support Geolocation. Using simulated coordinates.');
            renderMandiGraph(23.2599, 77.4126);
        }
    });

    const renderMandiGraph = (uLat, uLng) => {
        document.getElementById('gpsLoadingBlock').classList.add('hidden');
        const container = document.getElementById('gpsResultsBlock');
        container.classList.remove('hidden');

        // Identify currently loaded Mandis from API or Dummy source
        const clean = cleanData(window.__cachedRawData || []);
        const unique = [...new Set(clean.map(item => item.mandi))];

        let mapped = [];
        unique.forEach(mName => {
            const coords = mandiCoordinates[mName] || { lat: 25.0 + Math.random()*5, lng: 75.0 + Math.random()*5 };
            const dist = calculateDistance(uLat, uLng, coords.lat, coords.lng);
            mapped.push({ name: mName, dist: Math.round(dist) });
        });

        // Filter to TOP 4 Closest Nodes
        mapped.sort((a,b) => a.dist - b.dist);
        const closest = mapped.slice(0, 4);
        
        let graphHTML = `<svg style="position:absolute; width:100%; height:100%; top:0; left:0; z-index:1;">`;
        let nodesHTML = '';
        
        const maxDist = Math.max(...closest.map(c => c.dist)) || 1;
        
        closest.forEach((mandi, idx) => {
            // Spin each node logically across a 360 circle
            const angle = (Math.PI * 2 * idx) / closest.length;
            // Generate visual distance from center using math formulas (17% to 40% radius bounds)
            const rPercent = 17 + ((mandi.dist / maxDist) * 23);
            
            const px = 50 + rPercent * Math.cos(angle);
            const py = 50 + rPercent * Math.sin(angle);
            
            // Render glowing vector laser line
            graphHTML += `<line x1="50%" y1="50%" x2="${px}%" y2="${py}%" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4" style="opacity:0.5; animation: dash 20s linear infinite;"></line>`;
            
            // Render UI Node
            nodesHTML += `
                <div style="position:absolute; left:${px}%; top:${py}%; transform:translate(-50%, -50%); z-index:2; text-align:center;">
                    <div style="width:18px; height:18px; background:var(--emerald); border-radius:50%; box-shadow:0 0 12px var(--emerald); margin:0 auto;"></div>
                    <div style="margin-top:8px; background:rgba(0,0,0,0.8); padding:6px 10px; border-radius:6px; font-size:0.8rem; border:1px solid rgba(16,185,129,0.4); color:#fff; white-space:nowrap; backdrop-filter:blur(4px);">
                        <strong style="color:var(--emerald-light); font-size:0.9rem;">${translateData(mandi.name)}</strong><br>
                        ${mandi.dist} KM
                    </div>
                </div>
            `;
        });
        
        graphHTML += `</svg>`;
        
        // Superimpose the Primary User Node into dead center
        nodesHTML += `
            <div style="position:absolute; left:50%; top:50%; transform:translate(-50%, -50%); z-index:3; text-align:center;">
                <div style="width:34px; height:34px; background:linear-gradient(135deg, var(--purple), #38bdf8); border:2px solid #fff; border-radius:50%; box-shadow:0 0 20px #6d28d9; margin:0 auto; animation: pulse 2s infinite;"></div>
                <div style="margin-top:8px; background:rgba(0,0,0,0.9); padding:5px 12px; border-radius:20px; font-size:0.9rem; color:#fff; border:1px solid rgba(255,255,255,0.2);">
                    <strong>${currentLang==='hi'?'आप (YOU)':'YOU'}</strong>
                </div>
            </div>
        `;

        document.getElementById('graphContainer').innerHTML = graphHTML + nodesHTML;
    };
});
