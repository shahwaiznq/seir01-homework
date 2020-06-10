require 'pry'


# # MTA Lab
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:

# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```
#
# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

# #
# trains = {
#   :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
#   :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
#   :six_line => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
# }






def plan_trip(stop1, line1, stop2, line2)

  trains = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
  # line1 == line2 ? stop2 = "Union Square" :
  route1 = trains[line1]
  route2 = trains[line2]

    if route1.index(stop1) < route1.index("Union Square")
      first_path = route1[(route1.index(stop1) + 1)..(route1.index("Union Square"))]
      puts "You must travel through the following stops on the #{line1} line: #{first_path.join(", ")}."
    else
      uptown = route1.reverse()
      first_path = uptown[(uptown.index(stop1) + 1)..(uptown.index("Union Square"))]
      puts "You must travel through the following stops on the #{line1} line: #{first_path.join(", ")}."
    end

    if line1 != line2
      puts "Transfer at Union Square."
      if route2.index("Union Square") < route2.index(stop2)
        second_path = route2[(route2.index("Union Square") + 1)..(route2.index(stop2))]
        puts "You must continue through the following stops on the #{line2} line: #{second_path.join(", ")}."
      else
        uptown = route2.reverse()
        second_path = uptown[(uptown.index("Union Square") + 1)..(uptown.index(stop2))]
        puts "You must continue through the following stops on the #{line2} line: #{second_path.join(", ")}."
      end
      puts "A total of #{first_path.length + second_path.length} stops."
    end
    # binding.pry
    puts "A total of #{first_path.length} stops."
end






puts "Union Square", "6", "Grand Central", "6"
plan_trip "Union Square", "6", "Grand Central", "6"

# puts "8th", "N", "Grand Central", "6"
# plan_trip "8th", "N", "Grand Central", "6"
#
# puts "8th", "L", "34th", "N"
# plan_trip "8th", "L", "34th", "N"
#
# puts "33rd", "6", "28th", "N"
# plan_trip "33rd", "6", "28th", "N"
























##################################### SINGLE LINE #############################################
#
# def plan_trip(stop1, line1, stop2)
#
#   trains = {
#     "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
#     # :l_line => {:name => "L", :stops => ["8th", "6th", "Union Square", "3rd", "1st"]},
#     # :six_line => {:name => "6", :stops => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}
#   }
#
#   # if trains.each {|t| trains.values[t][:name]} == station1  this is to select the right starting train
#
#   route = trains[line1]
#
#   if route.index(stop1) < route.index(stop2)
#     binding.pry
#     downtown_path = route[(route.index(stop1) + 1)..(route.index(stop2))]
#     puts "You must travel through the following stops on the N line: #{downtown_path.to_s}"
#   else
#     uptown = route.reverse()
#     uptown_path = uptown[(uptown.index(stop1) + 1)..(uptown.index(stop2))].to_s
#     puts "You must travel through the following stops on the N line: #{uptown_path.to_s}"
#     # binding.pry
#
#   end
#   puts "A total of #{route.index(stop1) - route.index(stop2)} stops"
#
# end
#
#
#
# plan_trip "8th", "N", "Times Square"
