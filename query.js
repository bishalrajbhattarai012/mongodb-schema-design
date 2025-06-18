db.categories.aggregate([
    {
    $match:{_id:12}
    },
  {
    $graphLookup: {
      from: "categories",
      startWith: "$parentId",
      connectFromField: "parentId",
      connectToField: "_id",
      as: "hierarchy",
    },
  },
  {$limit:1}
]);
