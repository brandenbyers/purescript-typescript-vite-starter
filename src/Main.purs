module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)

logSpaghetti :: Effect Unit
logSpaghetti = log "🍝 Spaghetti"

logPizza :: Effect Unit
logPizza = log "🍕 Pizza"

logCupcake :: Effect Unit
logCupcake = log "🧁 Cupcake"

logApple :: Effect Unit
logApple = log "🍎 Apple"