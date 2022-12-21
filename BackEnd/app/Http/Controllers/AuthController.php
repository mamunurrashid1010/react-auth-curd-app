<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api',['except'=>['login','register']]);
    }

    /*
     * create new user
     */
    public function register(Request $request){
        $data=$request->all();
        // validation
        $rule=[
            'name'      => 'required',
            'email'     => 'required|email|unique:users',
            'password'  => 'required',
        ];
        $customMessage=[
            'name.required'     => 'Name is required',
            'email.required'    => 'Email is required',
            'email.email'       => 'Email must be a valid mail',
            'password.required' => 'Password is required',
        ];
        $validation=Validator::make($data,$rule,$customMessage);
        if($validation->fails()){
            return response()->json($validation->errors(),422);
        }
        // create user
        $user= new User();
        $user->name     =  $data['name'];
        $user->email    =  $data['email'];
        $user->password =  Hash::make($data['password']);
        $user->save();
        $message="User Create Successfully";
        return response()->json([
            'message'=>$message,
            'user'   =>$user,
        ],201);
    }

    /*
     * login user with jwt
     */
    public function login(Request $request){
        $data=$request->all();

        // validation
        $rule=[
            'email'     => 'required|email|exists:users',
            'password'  => 'required',
        ];
        $customMessage=[
            'email.required'    => 'Email is required',
            'email.email'       => 'Email must be a valid mail',
            'email.exists'      => 'Email does not exist',
            'password.required' => 'Password is required',
        ];
        $validation=Validator::make($data,$rule,$customMessage);
        if($validation->fails()){
            return response()->json($validation->errors(),422);
        }

        if(!$token=auth()->attempt($validation->validated())){
            return response()->json(['error'=>'Unauthorized',401]);
        }

        return $this->createNewToken($token);
    }

    /*
     * create new token for user
     */
    public function createNewToken($token){
        return response()->json([
            'access_token'=> $token,
            'token_type'  => 'bearer',
            'user'        => Auth::user(),
        ]);
    }
}
