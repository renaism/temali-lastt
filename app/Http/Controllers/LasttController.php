<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LasttController extends Controller
{
    public function index()
    {
        return view('lastt.index');
    }

    public function test()
    {
        return view('lastt.test');
    }

    public function result()
    {
        return view('lastt.result');
    }
}
