# def mutation correct, bad
# 	nice_print = ''
# 	mutations = 0
# 	correct.split('').map.with_index do |x, i|
# 		if x === bad[i]
# 			nice_print += ' '
# 		else
# 			mutations += 1
# 			nice_print += '^'
# 		end
# 	end
# 	puts "#{mutations} mutations"
# 	puts correct, bad, nice_print
# end

def mutation correct, bad
	differences = correct.split('').map.with_index { |x, i| x != bad[i]}
	puts "#{differences.count true} mutations"
	puts correct, bad
	puts differences.map {|x| x ? '^' : ' '}.join
end

mutation 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'