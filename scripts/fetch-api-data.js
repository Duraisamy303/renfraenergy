const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const BASE = "https://api.renfraenergy.com";
const AUTH_TOKEN = process.env.API_AUTH_TOKEN;
const JSON_DIR = path.join(__dirname, "../JSON/solution");

const endpoints = [
  // {
  //   url: `${BASE}/masters/home/get/?web_sts=1&active_status=1`,
  //   file: "about_stats.json",
  // },
  // {
  //   url: `${BASE}/masters/solutions/get/?web_sts=1&active_status=1&order_type=asc&order_field=created_date`,
  //   file: "solutions.json",
  // },
  // {
  //   url: `${BASE}/masters/projects/get/?web_sts=1&order_type=asc&order_field=created_date&get_sts=1`,
  //   file: "projects.json",
  // },
  // {
  //   url: `${BASE}/masters/testimonials/get/?web_sts=1&active_status=1`,
  //   file: "testimonials.json",
  // },
  // {
  //   url: `${BASE}/masters/investors/get/?web_sts=1&active_status=1&order_type=asc&order_field=created_date`,
  //   file: "investors.json",
  // },


  {
    url: `${BASE}/masters/solutions/content/get/?solution_id=NjQ1MTRlNDQtYzdhZC00ZThhLWEwODEtNDc4MDAwZjhmODY5&web_sts=1`,
    file: "detail.json",
  },
];

function mergeData(existing, incoming) {
  // If existing JSON has no valid data array, return incoming as-is
  const existingData = Array.isArray(existing?.data) ? existing.data : [];
  const incomingData = Array.isArray(incoming?.data) ? incoming.data : [];

  const map = new Map(existingData.map((item) => [item.id, item]));

  // Update existing records and add new ones
  for (const item of incomingData) {
    map.set(item.id, item);
  }

  return { ...incoming, data: Array.from(map.values()) };
}

async function fetchAll() {
  for (const { url, file } of endpoints) {
    const filePath = path.join(JSON_DIR, file);
    try {
      const res = await fetch(url, { headers: { Authorization: AUTH_TOKEN } });
      const incoming = await res.json();

      // Skip if API returned error or no valid data
      if (incoming?.action !== "success" || !Array.isArray(incoming?.data)) {
        console.warn(`⚠️  ${file} skipped — API response: ${incoming?.message || incoming?.action}`);
        continue;
      }

      // Read existing JSON if available
      let existing = null;
      if (fs.existsSync(filePath)) {
        try {
          existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        } catch {
          existing = null;
        }
      }

      const merged = existing?.data ? mergeData(existing, incoming) : incoming;
      fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
      console.log(`✅ ${file} updated`);
    } catch (err) {
      console.error(`❌ ${file} failed — existing data preserved:`, err.message);
    }
  }
}

fetchAll();
