#!/bin/bash

# Correction des imports
for f in app/components/ui/*.tsx; do
  # Suppression des versions spécifiques
  sed -i "" -e "s/@[0-9]\+\.[0-9]\+\.[0-9]\+//g" "$f"
  
  # Correction des imports spécifiques
  sed -i "" \
    -e "s/from \"lucide-react@[0-9.]\+\"/from \"lucide-react\"/g" \
    -e "s/from \"class-variance-authority@[0-9.]\+\"/from \"class-variance-authority\"/g" \
    -e "s/from \"embla-carousel-react@[0-9.]\+\"/from \"embla-carousel-react\"/g" \
    -e "s/from \"react-hook-form@[0-9.]\+\"/from \"react-hook-form\"/g" \
    -e "s/from \"cmdk@[0-9.]\+\"/from \"cmdk\"/g" \
    -e "s/from \"vaul@[0-9.]\+\"/from \"vaul\"/g" \
    -e "s/from \"react-resizable-panels@[0-9.]\+\"/from \"react-resizable-panels\"/g" \
    "$f"
done
