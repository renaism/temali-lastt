@extends('layouts.app')

@section('content')
<style >
body {
    background: url('/images/bg/lastt-start.jpg') no-repeat center fixed;
    background-size: cover;
    color: white;
}

.fill {
    background-color: rgba(60, 60, 60, 0.8);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: -100;
}

.container {
    margin-top: 100px;
}

h1 {
    font-size: 43px;
    font-weight: bold;
}

hr {
    width: 62px;
    color: #52FFFF;
    border-width: 5px;
    border-style: solid;
    border-top: none;
}

p {
    max-width: 500px;
    margin: auto;
    font-size: 20px;
}

a.btn {
    width: 120px;
    height: 120px;
    margin: auto;
    font-size: 20px;
    font-weight: bold;
}

</style>
<div class="fill"></div>

<div class="container text-center">
    <a href="http://temali.space/" target="_blank">
        <img src="{{ asset('logo.png') }}" class="mb-3">
    </a>
    <hr class="mb-5">
    <h1 class="mb-5">Light Assesment</h1>
    <p>
        Yuk, kenali secara garis besar dirimu. Ada 4 sesi yang akan kamu lalui. Per sesinya, kamu akan diminta nge-klik deskripsi-deskripsi tentang dirimu.
    </p>
    <br>
    <p>
        Bentar kok ngisinya, cuman 5-10 menit.
    </p>
    <br>
    <p class="mb-5">
        Jika sudah siap, klik MULAI ya!
    </p>
    <a href="/lastt/test" class="btn btn-large btn-temali rounded-circle d-flex justify-content-center align-items-center">
        <span>MULAI!</span>
    </a>
</div>

@endsection