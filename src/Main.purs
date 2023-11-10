module Main where

import Prelude

import Data.String (toUpper)
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

add :: Int -> Int -> Int
add x y = x + y

multiply :: Int -> Int -> Int
multiply x y = x * y

concatStrings :: String -> String -> String
concatStrings a b = a <> b

toUpperCase :: String -> String
toUpperCase str = toUpper str

isEven :: Int -> Boolean
isEven n = n `mod` 2 == 0