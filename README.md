# सितलानी रोटी छा थ्यो? — Sitlani Roti Chha Thayu?

AI kitchen helper for a pure-vegetarian Sindhi family. Talk to Amma by voice, pick ingredients, get dishes. Works offline (AI needs internet). Installs like a normal Android app (PWA). **Never needs updating — it updates itself.**

## 5-step GitHub setup (English)
1. On github.com create a **new public repository** (e.g. `roti-chha-thayu`).
2. Click **Add file → Upload files**, drag **everything from this folder** (including the `.github` folder — if the browser skips it, use the GitHub Desktop app or `git push`), then **Commit**.
3. Go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab, wait ~1 minute for the green tick. Your app link is `https://YOUR-NAME.github.io/roti-chha-thayu/`.
5. Open that link in **Chrome on Android → ⋮ → Add to Home screen / Install app**. Done!

## Gemini AI key (for Amma's smart brain)
Open the app → **⚙️ (Me) → Gemini API key** → paste → **Save & test**. Free key: https://aistudio.google.com/apikey . The key stays only on that phone. Without a key the built-in offline Amma still works.

## हिंदी में (5 कदम)
1. github.com पर **नई public repository** बनाइए।
2. **Add file → Upload files** में इस फोल्डर की **सारी फाइलें** (`.github` फोल्डर समेत) डालिए, **Commit** कीजिए।
3. **Settings → Pages → Source: GitHub Actions** चुनिए।
4. **Actions** टैब में 1 मिनट रुकिए, हरा निशान आने पर लिंक `https://आपका-नाम.github.io/रेपो-नाम/` तैयार।
5. Android के **Chrome** में लिंक खोलिए → **⋮ → Add to Home screen**। ऐप तैयार!
**Gemini की:** ऐप में ⚙️ → Gemini API की → चिपकाइए → Save & test।

## v3 — design from your mock-up
Home (आज छा बणाईंदासीं?), Today’s Suggestion, Recipe Categories (9), By Ingredients, Meal Plan (Breakfast/Lunch/Dinner/Weekly/Festive), My Favourites, Welcome screen. Languages: हिंदी / English / सिंधी (UI) — tap Me → Language to cycle.

## Earlier features

- Royal Sindhi look (ajrak patterns, gold) + 3 more themes (🎨). Your logo is the app icon.
- 🔄 **Refresh content** (Home top-right or Me): needs internet; fetches `content.json` from your repo and (with Gemini key) new AI dishes, jokes, Sindhi words. It also runs by itself once a week.
- 🗓 **Day rules** (Me → Day rules): e.g. Wednesday ✅ Moong. Home, plan and Amma all follow it. You can also just tell Amma: “बुधवार को हम मूंग खाते हैं”.
- 🎤 Amma is a voice assistant: she can add/remove ingredients, set Easy/Hard and meal, mark dishes cooked, reset, and open screens.
- To add your own dishes/jokes for everyone: edit `content.json` on GitHub (pencil icon) → Commit → press 🔄 in the app.

## Real APK file (optional)
Go to https://www.pwabuilder.com , paste your app link, choose **Android**, download the package.

## Editing later
Everything is in `index.html`: dishes are in the `R=` and `R2=` text lists (`English name|हिंदी|meals(b,l,s,d)|ingredient codes`). Edit on GitHub (pencil icon) → Commit → live in a minute.
