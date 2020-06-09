require 'pry'

def show_menu
  puts "Calculator" # to do - use the ruby center method to center this in the console.
  puts "-=" * 40
  puts "[a] - addition"
  puts "[q] - quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q' # unless q is selected, continue to loop
  # do calculating here
  case menu_choice
  when 'a'
    puts "Addition coming soon" # todo add addition here
    binding.pry
  else
    puts "Invalid selection, idiot."
  end

  # show the menu
  show_menu
  # get the user choice
  menu_choice = gets.chomp.downcase

end

puts "Thanks for using crappy Calc."
