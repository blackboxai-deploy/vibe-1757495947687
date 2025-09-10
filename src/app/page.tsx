"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [todayStats] = useState({
    workoutProgress: 75,
    caloriesConsumed: 1850,
    caloriesTarget: 2200,
    waterIntake: 6,
    waterTarget: 8
  })

  // Mock user data - replace with actual auth
  useEffect(() => {
    const mockUser = {
      name: "Alex Johnson",
      level: "Intermediate",
      streak: 12,
      totalWorkouts: 45
    }
    setUser(mockUser)
  }, [])

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              FitTrainer Pro
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Your complete personal training companion. Track workouts, plan nutrition, 
              monitor progress, and achieve your fitness goals with AI-powered recommendations.
            </p>
            
            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src="https://storage.googleapis.com/coherent-vision-483522/fit-tracker-b66dc7a8-74c7-4b02-9a24-0e26b3d7c6ba.png" 
                alt="Modern fitness app interface showing workout tracking and progress analytics"
                className="rounded-2xl shadow-2xl mx-auto max-w-full"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/auth/register">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Start Your Fitness Journey
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3">
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏋️</span>
                  </div>
                  <CardTitle>Smart Workouts</CardTitle>
                  <CardDescription>
                    AI-powered workout recommendations tailored to your goals and progress
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🥗</span>
                  </div>
                  <CardTitle>Nutrition Planning</CardTitle>
                  <CardDescription>
                    Comprehensive meal planning and nutrition tracking for optimal results
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <CardTitle>Progress Analytics</CardTitle>
                  <CardDescription>
                    Detailed insights and visual progress tracking to keep you motivated
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome back, {user.name}!
              </h1>
              <div className="flex items-center gap-4 mt-1">
                <Badge variant="secondary">{user.level}</Badge>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  🔥 {user.streak} day streak
                </span>
              </div>
            </div>
            <Button variant="outline">
              <Link href="/profile">View Profile</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Today's Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Today's Workout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {todayStats.workoutProgress}%
              </div>
              <Progress value={todayStats.workoutProgress} className="mb-2" />
              <p className="text-xs text-gray-500">Upper Body Strength</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Calories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-2">
                {todayStats.caloriesConsumed}
              </div>
              <Progress 
                value={(todayStats.caloriesConsumed / todayStats.caloriesTarget) * 100} 
                className="mb-2" 
              />
              <p className="text-xs text-gray-500">of {todayStats.caloriesTarget} target</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Water Intake
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-500 mb-2">
                {todayStats.waterIntake}/{todayStats.waterTarget}
              </div>
              <Progress 
                value={(todayStats.waterIntake / todayStats.waterTarget) * 100} 
                className="mb-2" 
              />
              <p className="text-xs text-gray-500">glasses today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Total Workouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {user.totalWorkouts}
              </div>
              <p className="text-xs text-gray-500">completed this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Workout</CardTitle>
              <CardDescription>
                Jump into your personalized workout routine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link href="/workouts/recommended">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Today's Workout
                  </Button>
                </Link>
                <Link href="/workouts">
                  <Button variant="outline" className="w-full">
                    Browse All Workouts
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nutrition Tracking</CardTitle>
              <CardDescription>
                Log your meals and track your nutrition goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link href="/nutrition/log">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Log a Meal
                  </Button>
                </Link>
                <Link href="/nutrition">
                  <Button variant="outline" className="w-full">
                    View Nutrition Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>
              Track your fitness journey and celebrate achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img 
                  src="https://storage.googleapis.com/coherent-vision-483522/fit-tracker-35b8f8c3-a4a7-4b23-aaac-a7c57afa27ac.png" 
                  alt="Progress chart showing weight and strength improvements over time"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Recent Achievements</h4>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2">💪 Strength Milestone</Badge>
                    <Badge variant="outline" className="mr-2">🔥 7-Day Streak</Badge>
                    <Badge variant="outline" className="mr-2">🎯 Goal Achieved</Badge>
                  </div>
                </div>
                <Link href="/progress">
                  <Button variant="outline" className="w-full">
                    View Detailed Progress
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Menu */}
        <Card>
          <CardHeader>
            <CardTitle>App Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/workouts">
                <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center">
                  <span className="text-2xl mb-2">🏋️</span>
                  <span>Workouts</span>
                </Button>
              </Link>
              <Link href="/nutrition">
                <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center">
                  <span className="text-2xl mb-2">🥗</span>
                  <span>Nutrition</span>
                </Button>
              </Link>
              <Link href="/progress">
                <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center">
                  <span className="text-2xl mb-2">📊</span>
                  <span>Progress</span>
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center">
                  <span className="text-2xl mb-2">👤</span>
                  <span>Profile</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}