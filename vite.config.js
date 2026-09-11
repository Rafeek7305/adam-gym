import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function adamAssetsPlugin() {
  return {
    name: 'adam-assets-sync',
    configResolved() {
      const rootDir = __dirname
      const publicDir = path.join(rootDir, 'public')
      const assetsImgDir = path.join(rootDir, 'src', 'assets', 'images')
      const brainDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/44f1b53a-b7a2-46ce-88c4-0526d1c0e2b8'

      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true })
      }
      if (!fs.existsSync(assetsImgDir)) {
        fs.mkdirSync(assetsImgDir, { recursive: true })
      }

      // Sync logo.png to public/logo.png
      const rootLogo = path.join(rootDir, 'logo.png')
      const publicLogo = path.join(publicDir, 'logo.png')
      if (fs.existsSync(rootLogo) && !fs.existsSync(publicLogo)) {
        fs.copyFileSync(rootLogo, publicLogo)
      }

      // Sync generated photography assets
      const imagesMap = {
        'hero_athlete.jpg': 'hero_athlete_1789045380630.jpg',
        'strength_training.jpg': 'strength_training_1789045544448.jpg',
        'functional_training.jpg': 'functional_training_1789045563064.jpg',
        'personal_training.jpg': 'personal_training_1789045584557.jpg',
        'performance_training.jpg': 'performance_training_1789045606528.jpg',
        'conditioning_training.jpg': 'conditioning_training_1789045634616.jpg',
        'facility_interior.jpg': 'facility_interior_1789045668715.jpg',
        'facility_equipment.jpg': 'facility_equipment_1789045697975.jpg',
        'community_training.jpg': 'community_training_1789045726325.jpg',
        'head_coach.jpg': 'head_coach_1789045895123.jpg',
        'cta_athlete.jpg': 'cta_athlete_1789045922684.jpg'
      }

      for (const [targetName, sourceFile] of Object.entries(imagesMap)) {
        const sourcePath = path.join(brainDir, sourceFile)
        const targetPath = path.join(assetsImgDir, targetName)
        if (fs.existsSync(sourcePath) && !fs.existsSync(targetPath)) {
          fs.copyFileSync(sourcePath, targetPath)
        }
      }

      // Sync new workout images from current conversation
      const currentBrainDir = 'C:/Users/Admin/.gemini/antigravity-ide/brain/b279565b-e2b8-47d2-aaef-c66d9d5e3283'
      const newImagesMap = {
        'hero_man_1.jpg': 'hero_man_workout_1789109912019.jpg',
        'hero_man_2.jpg': 'hero_man_ropes_1789109932415.jpg',
        'hero_man_3.jpg': 'hero_man_dumbbell_1789109954370.jpg'
      }

      for (const [targetName, sourceFile] of Object.entries(newImagesMap)) {
        const sourcePath = path.join(currentBrainDir, sourceFile)
        const targetPath = path.join(assetsImgDir, targetName)
        if (fs.existsSync(sourcePath)) {
          try {
            fs.copyFileSync(sourcePath, targetPath)
          } catch (err) {
            console.error('Failed copying image', err)
          }
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), adamAssetsPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@brain': 'C:/Users/Admin/.gemini/antigravity-ide/brain/44f1b53a-b7a2-46ce-88c4-0526d1c0e2b8'
    }
  }
})

