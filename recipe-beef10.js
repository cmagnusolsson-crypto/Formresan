// Formresan v25: normalize built-in beef mince recipes to locally available 10% fat.
// Nutrition values are intentionally marked as estimates; recipes may contain other ingredients.
(function(){
  const catalogs=['ORIGINAL_RECIPES','STARTER_RECIPES','BREAKFAST_RECIPES','EXTRA_RECIPES','WORLD_RECIPES'];
  const regex=/nötfärs\s*(?:3\s*[–-]\s*7|8\s*[–-]\s*12|12|10)\s*%/i;
  const name10='Nötfärs 10 %';
  function adjust(r){
    if(!r || !Array.isArray(r.ingredientItems))return false;
    let changed=false;
    for(const ing of r.ingredientItems){
      if(!regex.test(ing.name||''))continue;
      const old=ing.name;
      if(old===name10)continue;
      ing.name=name10; changed=true;
    }
    if(changed){
      r.ingredients=r.ingredientItems.map(i=>`${i.amount} ${i.unit||'g'} ${i.name}`).join('\n');
      r.estimated=true;
      r.nutritionNote='Nötfärsen är anpassad till 10 % fett. Angivna näringsvärden är uppskattningar och behöver räknas om efter förpackningens deklaration.';
    }
    return changed;
  }
  for(const name of catalogs){
    try{const catalog=Function('return typeof '+name+'!=="undefined" ? '+name+' : null')();if(Array.isArray(catalog))catalog.forEach(adjust)}catch(e){}
  }
  window.formresanBeef10Adjust=adjust;
})();
