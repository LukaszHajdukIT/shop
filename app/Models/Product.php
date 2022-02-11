<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'image_path',
        'name',
        'description',
        'amount',
        'price',
        'category_id'
    ];

    /**
     * [category description]
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
      return $this->belongsTo(ProductCategory::class);
    }

    /**
     * [isSelectedCategory description]
     * @param  int  $category_id
     * @return bool
     */
    public function isSelectedCategory(int $category_id) : bool
    {
      return $this->hasCategory() && $this->category->id == $category_id;
    }

    /**
     * [hasCategory description]
     * @return bool
     */
    public function hasCategory() : bool
    {
      return !is_null($this->category);
    }
}
